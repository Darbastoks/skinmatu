"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import OrderDetailsModal from "@/components/admin/OrderDetailsModal";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  useEffect(() => {
    // Basic mock protection
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem("admin_auth");
      if (auth !== "true") {
        router.push("/admin/prisijungti");
        return;
      }
      fetchOrders();
    }
  }, [router]);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch (e) {
      console.error("Failed to fetch orders", e);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/prisijungti");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Kraunama...</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-50 pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="flex justify-between items-end mb-8 border-b border-zinc-200 pb-4">
          <div>
            <h1 className="text-3xl font-light text-zinc-800">Užsakymų valdymas</h1>
            <p className="text-sm text-zinc-500 mt-2">Viso užsakymų: {orders.length}</p>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-zinc-500 hover:text-black border border-zinc-200 px-4 py-2 bg-white rounded-sm">
               Į parduotuvę
            </Link>
            <button onClick={logout} className="text-sm text-red-500 hover:text-red-700 bg-red-50 px-4 py-2 rounded-sm border border-red-100">
               Atsijungti
            </button>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 rounded-sm shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-zinc-50 text-zinc-500 uppercase tracking-wider text-xs border-b border-zinc-200">
                <tr>
                  <th className="p-4 font-medium">Užsakymas</th>
                  <th className="p-4 font-medium">Data</th>
                  <th className="p-4 font-medium">Pirkėjas</th>
                  <th className="p-4 font-medium">Pristatymas</th>
                  <th className="p-4 font-medium">Statusas</th>
                  <th className="p-4 font-medium text-right">Suma</th>
                  <th className="p-4 font-medium text-center">Veiksmai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {orders.length === 0 ? (
                  <tr>
                     <td colSpan={7} className="p-8 text-center text-zinc-500">Nėra jokių užsakymų.</td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="hover:bg-zinc-50 transition-colors">
                      <td className="p-4 font-medium">{order.id}</td>
                      <td className="p-4 text-zinc-500">{new Date(order.date).toLocaleDateString('lt-LT')}</td>
                      <td className="p-4">
                        <div className="font-medium text-zinc-800">{order.customer.firstName} {order.customer.lastName}</div>
                        <div className="text-xs text-zinc-500">{order.customer.email}</div>
                      </td>
                      <td className="p-4 text-zinc-600 uppercase text-xs">{order.shipping.method}</td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'Naujas' ? 'bg-blue-100 text-blue-800' : 'bg-zinc-100 text-zinc-800'}`}>
                           {order.status}
                        </span>
                      </td>
                      <td className="p-4 text-right font-medium">{formatPrice(order.total)}</td>
                      <td className="p-4 text-center">
                        <button 
                          onClick={() => setSelectedOrder(order)}
                          className="text-xs tracking-widest uppercase bg-zinc-900 text-white px-3 py-1.5 rounded-sm hover:bg-zinc-700 transition-colors"
                        >
                          Peržiūrėti
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedOrder && (
        <OrderDetailsModal 
          order={selectedOrder} 
          onClose={() => setSelectedOrder(null)} 
        />
      )}
    </div>
  );
}
