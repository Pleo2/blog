import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Star } from "feather-icons-react";

export const GlassCard = ({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) => {
    return (
        <Card
            className={`h-full w-full overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </Card>
    );
};
