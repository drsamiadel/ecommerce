"use client";

import { ShpoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

interface ShoppingCartBtnProps {
  cart: ShpoppingCart | null;
}

export default function ShoppingCartBtn({ cart }: ShoppingCartBtnProps) {
  function closeDropdown() {
    const el = document.activeElement as HTMLElement;
    if (el) {
      el.blur();
    }
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <ShoppingCartIcon />
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content mt-3 w-52 bg-base-100 shadow z-30"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{cart?.size || 0} Items</span>
          <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn btn-primary btn-block"
              onClick={closeDropdown}
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
