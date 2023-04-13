type InputProps = {
  label: string;
} & JSX.IntrinsicElements["input"];

export default function Input({ label, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </>
  );
}
