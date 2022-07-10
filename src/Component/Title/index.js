function Title({ titleText }) {
  return (
    <div
      className="titles text-left py-4 mb-8         
        px-4 md:px-8 lg:px-20 text-navy-blue"
    >
      <p>
        <strong>{titleText}</strong>
      </p>
    </div>
  );
}
export default Title;
