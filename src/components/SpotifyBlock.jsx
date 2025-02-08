const SpotifyBlock = () => {
  return (
    <div className="pb-4 opacity-10">
      <iframe
        src="https://open.spotify.com/embed/track/0nJW01T7XtvILxQgC5J7Wh?utm_source=generator"
        width="300"
        height="80"
        frameBorder="0"
        // eslint-disable-next-line react/no-unknown-property
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyBlock;
