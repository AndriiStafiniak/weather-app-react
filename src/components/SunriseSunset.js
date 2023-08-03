const formatTime = (time) => {
   return new Date(time * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
   });
};

const SunriseSunset = ({ sunrise, sunset }) => {
   return (
      <div className="sunrise-sunset">
         <p className="sunrise">Wschód słońca: {formatTime(sunrise)}</p>
         <p className="sunset">Zachód słońca: {formatTime(sunset)}</p>
      </div>
   );
};

export default SunriseSunset;
