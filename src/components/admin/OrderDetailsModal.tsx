"use client";

import { formatPrice } from "@/lib/utils";
import Image from "next/image";

interface OrderDetailsModalProps {
  order: any;
  onClose: () => void;
}

export default function OrderDetailsModal({ order, onClose }: OrderDetailsModalProps) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-100 sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-xl font-medium">Užsakymas {order.id}</h2>
            <p className="text-sm text-zinc-500 mt-1">Data: {new Date(order.date).toLocaleString('lt-LT')}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-black transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Customer & Shipping Info */}
          <div className="col-span-1 space-y-6">
            <section className="bg-zinc-50 p-5 rounded-sm border border-zinc-100">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">Pirkėjas</h3>
              <p className="font-medium text-sm">{order.customer.firstName} {order.customer.lastName}</p>
              {order.customer.company && <p className="text-sm text-zinc-600 mt-1">{order.customer.company}</p>}
              <div className="mt-3 text-sm flex flex-col gap-1 text-zinc-600">
                <a href={`mailto:${order.customer.email}`} className="hover:text-black">{order.customer.email}</a>
                <a href={`tel:${order.customer.phone}`} className="hover:text-black">{order.customer.phone}</a>
              </div>
            </section>

            <section className="bg-zinc-50 p-5 rounded-sm border border-zinc-100">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">Pristatymas</h3>
              <div className="text-sm text-zinc-800">
                <p>{order.customer.address}</p>
                <p>{order.customer.postalCode} {order.customer.city}</p>
              </div>
              <div className="mt-3 text-sm">
                <span className="text-zinc-500 mr-2">Būdas:</span> 
                <span className="font-medium uppercase">{order.shipping.method}</span>
              </div>
              <div className="mt-1 text-sm">
                <span className="text-zinc-500 mr-2">Kaina:</span> 
                <span>{order.shipping.cost === 0 ? "Nemokamai" : formatPrice(order.shipping.cost)}</span>
              </div>
            </section>

            <section className="bg-zinc-50 p-5 rounded-sm border border-zinc-100">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">Apmokėjimas</h3>
              <div className="text-sm">
                <span className="text-zinc-500 mr-2">Būdas:</span> 
                <span className="font-medium uppercase">{order.payment.method}</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-zinc-500">Statusas:</span>
                <span className={`text-xs px-2 py-1 rounded-full ${order.payment.status === 'Apmokėta' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {order.payment.status}
                </span>
              </div>
            </section>

            {order.notes && (
              <section className="bg-orange-50 p-5 rounded-sm border border-orange-100">
                <h3 className="text-xs uppercase tracking-wider text-orange-800 font-semibold mb-2">Pastabos</h3>
                <p className="text-sm text-orange-900 italic">"{order.notes}"</p>
              </section>
            )}
          </div>

          {/* Right Column: Ordered Items */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-medium mb-4 pb-2 border-b border-zinc-100">Užsakytos prekės ({order.items.length})</h3>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {order.items.map((item: any, index: number) => (
                <div key={index} className="flex gap-4 p-3 border border-zinc-100 rounded-sm hover:bg-zinc-50 transition-colors">
                  <div className="relative w-20 h-20 bg-white flex-shrink-0 border border-zinc-200">
                    {item.image && (
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-sm font-medium leading-tight mb-2">{item.name}</p>
                    <div className="flex justify-between items-center text-sm text-zinc-500">
                      <span>{formatPrice(item.price)} x {item.quantity}</span>
                      <span className="font-medium text-black">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200">
              <div className="flex justify-end mb-2 text-sm text-zinc-500 gap-8">
                <span>Tarpinė suma:</span>
                <span className="w-24 text-right text-black">{formatPrice(order.subtotal)}</span>
              </div>
              <div className="flex justify-end mb-4 text-sm text-zinc-500 gap-8">
                <span>Pristatymas:</span>
                <span className="w-24 text-right text-black">{formatPrice(order.shipping.cost)}</span>
              </div>
              <div className="flex justify-end text-lg font-medium gap-8 items-center bg-zinc-50 p-4 rounded-sm border border-zinc-100">
                <span>Viso mokėti:</span>
                <span className="text-xl w-24 text-right">{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
