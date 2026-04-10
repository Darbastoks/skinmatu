export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define path to the local database file. 
// Using process.cwd() ensures it resolves correctly in Next.js backend relative to project root.
const DB_PATH = path.join(process.cwd(), 'orders.json');

// Interface representation (matching TS types that will be used frontend)
function getOrders() {
    try {
        if (!fs.existsSync(DB_PATH)) {
            // Initialize with empty array if it doesn't exist
            fs.writeFileSync(DB_PATH, JSON.stringify([]));
            return [];
        }
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        console.error("Error reading orders:", e);
        return [];
    }
}

function saveOrders(orders: any[]) {
    fs.writeFileSync(DB_PATH, JSON.stringify(orders, null, 2));
}

// Generate a simple readable order ID like #SKIN-1001
function generateOrderId(orders: any[]) {
    if (orders.length === 0) return 'SKIN-1001';
    const lastOrder = orders[0]; // Assuming newest is first
    const lastNumber = parseInt(lastOrder.id.replace('SKIN-', ''));
    if (isNaN(lastNumber)) return `SKIN-${1000 + orders.length + 1}`;
    return `SKIN-${lastNumber + 1}`;
}

export async function GET(req: NextRequest) {
    const orders = getOrders();
    return NextResponse.json({ orders });
}

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();
        const orders = getOrders();

        const newOrder = {
            id: generateOrderId(orders),
            date: new Date().toISOString(),
            status: 'Naujas', // New
            ...payload,
            payment: {
                ...payload.payment,
                status: 'Apmokėta', // For mockup purposes, automatically set as paid if payment flow skipped
            }
        };

        // Add to the beginning of the list
        orders.unshift(newOrder);
        saveOrders(orders);

        return NextResponse.json({ success: true, orderId: newOrder.id }, { status: 201 });
    } catch (error) {
        console.error("Failed to create order:", error);
        return NextResponse.json({ error: 'Failed to specify order' }, { status: 500 });
    }
}
