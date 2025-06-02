export default function Map({ src }) {
  return (
    <iframe
      src={src}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
