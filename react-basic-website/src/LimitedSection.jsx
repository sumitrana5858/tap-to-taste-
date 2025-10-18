const LimitedSection = () => {
  return (
    <div className="grid grid-row-2 gap-7">
      <div className="flex justify-center">
        <p>Need help choosing? Contact our sales team for personalized recommendations.</p>
      </div>
      <div >
        <div className="flex justify-center">
        <p className="text-gray-600 mb-2">{`{ Limited Time offer}`}</p>
        </div>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Premium Features, Limited-Time Discount </h1>
        </div>
      </div>
    </div>
  );
};

export default LimitedSection;
