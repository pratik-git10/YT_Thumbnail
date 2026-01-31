import { useSearchParams } from "react-router-dom";
import { yt_html } from "../components/YtpreviewComponent";

const YtPreview = () => {
  const [searchparams] = useSearchParams();
  const thumbnail_url = searchparams.get("thumbnail_url");

  const thumbnail_title = searchparams.get("title");
  const new_html = yt_html
    .replace("%%THUMBNAIL_URL%%", thumbnail_url)
    .replace("%%TITLE%%", thumbnail_title);

  return (
    <div className="fixed inset-0 z-100 bg-black">
      <iframe
        srcDoc={new_html}
        width="100%"
        height={"100%"}
        allowFullScreen></iframe>
    </div>
  );
};

export default YtPreview;
