export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-NG", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
