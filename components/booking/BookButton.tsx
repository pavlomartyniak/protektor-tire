"use client";

import { Button } from "@/components/ui/Button";
import { useBooking } from "@/components/booking/BookingContext";

type BookButtonProps = React.ComponentProps<typeof Button> & {
  service?: string;
};

export function BookButton({ service, onClick, ...props }: BookButtonProps) {
  const { openBooking } = useBooking();

  const handleClick: React.MouseEventHandler<HTMLButtonElement & HTMLAnchorElement> = (e) => {
    onClick?.(e);
    openBooking(service);
  };

  return <Button type="button" onClick={handleClick} {...props} />;
}
