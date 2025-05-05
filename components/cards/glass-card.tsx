import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Star } from "feather-icons-react";

export const GlassCard = ({ className, children, ...props }: React.ComponentProps<"div">) => {
    return (
        <Card className={`h-full w-full ${className}`} {...props}>
            {children}
                {/* <CardHeader>
                    <Star className="w-4"/>
                    <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
        </Card>
    );
};
