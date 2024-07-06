import TagLine from "./TagLine";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && (
        <h2 className="h2 line-clamp-2 break-words overflow-hidden text-ellipsis">
          {title}
        </h2>
      )}
      {text && <p className="text-xl md:text-2xl font-bold text-gray-600">{text}</p>}
    </div>
  );
};

export default Heading;
