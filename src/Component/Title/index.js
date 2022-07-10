function Title({titleText}) {
  return (
    <div
      className="titles gap-8 justify-items-left py-4 mb-8 
        grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4
        px-4 md:px-8 lg:px-20 text-navy-blue"
    >
      <p><strong>{titleText}</strong></p>
    </div>
  );
}
export default Title;
