interface Props {
  isSaved: boolean;
}

export default function AutoSaveIndicator({ isSaved }: Props) {
  if (!isSaved) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg">
      Draft Saved ✓
    </div>
  );
}
