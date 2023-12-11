import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - T Shop",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const image = formData.get("image")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !image || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, image, price },
  });

  redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  return (
    <div>
      <h1 className="text-lg font-semibold">Add Product</h1>
      <form className="my-4 space-y-4" action={addProduct}>
        <input
          className="input-bordered input w-full"
          type="text"
          required
          placeholder="Name"
          name="name"
        />
        <textarea
          className="textarea-bordered textarea h-20 max-h-40 w-full"
          required
          placeholder="Description"
          name="description"
        ></textarea>
        <input
          className="input-bordered input w-full"
          type="url"
          required
          placeholder="Image URL"
          name="image"
        />
        <input
          className="input-bordered input w-full"
          type="text"
          required
          placeholder="Price"
          inputMode="numeric"
          pattern="[0-9]+"
          name="price"
        />
        <FormSubmitBtn className="btn-block">Add</FormSubmitBtn>
      </form>
    </div>
  );
}
