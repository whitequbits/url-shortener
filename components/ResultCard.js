export default function ResultCard(props) {
  return (
    <div className="bg-green-200 max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">Shortened URL:</div>
        <p className="text-gray-700 text-base">{props.shortUrl}</p>
      </div>
    </div>
  );
}
