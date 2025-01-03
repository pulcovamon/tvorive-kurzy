const ImagePreview = ({ path, key }: { path: string; key: string|number }) => {
  return (
    <div className="image-preview">
      <img src={path} key={key} loading="lazy" />
    </div>
  );
};

export default ImagePreview;
