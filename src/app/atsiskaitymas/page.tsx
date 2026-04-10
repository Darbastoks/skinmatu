"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCart();
  const total = getTotal();
  const router = useRouter();
  
  const [shippingMethod, setShippingMethod] = useState("omniva");
  const [shippingCost, setShippingCost] = useState(2.99);
  const [paymentMethod, setPaymentMethod] = useState("paysera");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    company: "",
    notes: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If cart is empty, redirect to shop
    if (items.length === 0) {
       // Only redirect if absolutely empty and not just loading
       // router.push("/prekes");
    }
  }, [items, router]);

  useEffect(() => {
    if (shippingMethod === "omniva") setShippingCost(2.99);
    else if (shippingMethod === "lpexpress") setShippingCost(2.99);
    else if (shippingMethod === "kurjeris") setShippingCost(4.99);
    else if (shippingMethod === "pickup") setShippingCost(0);
  }, [shippingMethod]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const finalTotal = total + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
        alert("Jūsų krepšelis tuščias!");
        return;
    }
    setLoading(true);

    try {
      const orderPayload = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          company: formData.company
        },
        shipping: {
          method: shippingMethod,
          cost: shippingCost,
        },
        payment: {
          method: paymentMethod
        },
        notes: formData.notes,
        items: items.map(item => ({
          id: item.product.id,
          name: item.product.name,
          quantity: item.quantity,
          price: item.product.price || 0,
          image: item.product.image
        })),
        subtotal: total,
        total: finalTotal
      };

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload)
      });

      if (res.ok) {
        const { orderId } = await res.json();
        clearCart();
        router.push(`/atsiskaitymas/sekmingai?orderId=${orderId}`);
      } else {
        alert("Įvyko klaida apdorojant užsakymą. Bandykite dar kartą.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Sistemos klaida.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
      return (
          <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center pt-32">
              <h1 className="text-2xl font-light mb-4">Atsiskaitymas</h1>
              <p className="text-gray-500 mb-8">Jūsų krepšelis yra tuščias.</p>
              <Link href="/prekes" className="bg-black text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors">
                  Grįžti į parduotuvę
              </Link>
          </div>
      )
  }

  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h1 className="text-3xl font-light mb-10 text-zinc-800">Atsiskaitymas</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12">
          {/* LEFT: Billing Details */}
          <div className="flex-1">
            <h2 className="text-xl font-medium mb-6 pb-2 border-b border-zinc-200">Pirkėjo informacija</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-1">Vardas <span className="text-red-500">*</span></label>
                <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-1">Pavardė <span className="text-red-500">*</span></label>
                <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm text-zinc-600 mb-1">Įmonės pavadinimas (neprivaloma)</label>
                <input name="company" value={formData.company} onChange={handleInputChange} type="text" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm text-zinc-600 mb-1">Gatvė, namo numeris <span className="text-red-500">*</span></label>
                <input required name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="Gedimino pr. 1" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-1">Miestas <span className="text-red-500">*</span></label>
                <input required name="city" value={formData.city} onChange={handleInputChange} type="text" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-1">Pašto kodas <span className="text-red-500">*</span></label>
                <input required name="postalCode" value={formData.postalCode} onChange={handleInputChange} type="text" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-1">Telefonas <span className="text-red-500">*</span></label>
                <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-1">El. paštas <span className="text-red-500">*</span></label>
                <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col md:col-span-2 mt-4">
                <label className="text-sm text-zinc-600 mb-1">Papildoma informacija (neprivaloma)</label>
                <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={3} placeholder="Pastabos apie užsakymą arba pristatymą" className="border border-zinc-300 p-2 focus:border-black focus:ring-0 outline-none transition-colors rounded-sm resize-none"></textarea>
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="w-full lg:w-[450px]">
            <div className="bg-white p-6 border border-zinc-200 shadow-sm rounded-sm sticky top-32">
              <h2 className="text-xl font-medium mb-4 pb-2 border-b border-zinc-200">Jūsų užsakymas</h2>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-16 h-16 bg-zinc-100 flex-shrink-0">
                      {item.product.image && (
                         <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-sm font-medium leading-tight mb-1">{item.product.name}</p>
                      <div className="flex justify-between items-center text-sm text-zinc-500">
                        <span>Kiekis: {item.quantity}</span>
                        <span>{formatPrice((item.product.price || 0) * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-100 pt-4 mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Tarpinė suma</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Pristatymas</span>
                  <span>{shippingCost === 0 ? "Nemokamai" : formatPrice(shippingCost)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-medium border-t border-zinc-200 pt-4 mb-8">
                <span>Viso</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>

              {/* Shipping Methods */}
              <h3 className="text-md font-medium mb-3">Pristatymo būdas</h3>
              <div className="space-y-2 mb-6">
                {[
                  { id: 'omniva', label: 'Omniva paštomatas', cost: 2.99 },
                  { id: 'lpexpress', label: 'LP Express paštomatas', cost: 2.99 },
                  { id: 'kurjeris', label: 'Kurjeris', cost: 4.99 },
                  { id: 'pickup', label: 'Atsiėmimas vietoje', cost: 0 },
                ].map(method => (
                  <label key={method.id} className="flex items-center gap-3 p-3 border border-zinc-200 rounded-sm cursor-pointer hover:bg-zinc-50">
                    <input 
                      type="radio" 
                      name="shipping" 
                      value={method.id} 
                      checked={shippingMethod === method.id}
                      onChange={() => setShippingMethod(method.id)}
                      className="accent-black w-4 h-4"
                    />
                    <div className="flex-1 flex justify-between text-sm">
                      <span>{method.label}</span>
                      <span className="text-zinc-500">{method.cost > 0 ? formatPrice(method.cost) : '0,00 €'}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Payment Methods */}
              <h3 className="text-md font-medium mb-3">Mokėjimo būdas</h3>
              <div className="space-y-2 mb-8">
                {[
                  { id: 'paysera', label: 'Paysera (El. bankininkystė)' },
                  { id: 'card', label: 'Banko kortele (Stripe)' },
                  { id: 'bank', label: 'Tiesioginis banko pavedimas' },
                ].map(method => (
                  <label key={method.id} className="flex items-center gap-3 p-3 border border-zinc-200 rounded-sm cursor-pointer hover:bg-zinc-50">
                    <input 
                      type="radio" 
                      name="payment" 
                      value={method.id} 
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="accent-black w-4 h-4"
                    />
                    <span className="text-sm">{method.label}</span>
                  </label>
                ))}
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-black text-white px-6 py-4 uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50"
              >
                {loading ? "Apdorojama..." : "Patvirtinti užsakymą"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
