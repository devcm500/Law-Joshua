import { formatDistanceToNow } from "date-fns";

export const timeAgo = (createdDate: string | Date): string => {
  const date =
    typeof createdDate === "string" ? new Date(createdDate) : createdDate;
  return formatDistanceToNow(date, { addSuffix: true });
};
