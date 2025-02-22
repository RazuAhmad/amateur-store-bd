import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
          />
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
