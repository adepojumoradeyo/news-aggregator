function Spinner() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-500 border-t-transparent"></div>
    </div>
  );
}

export default Spinner;
