const Card = ({ ...props }) => {
    return (
      <div className="md:p-8 p-2 dark:bg-gray-800 bg-white">
        <img
          className="rounded-lg w-full"
          src={props.image}
          style={{ height: "30vh" }}
        />

        <p className="text-black font-semibold text-base mt-2 dark:text-yellow-300">
          {props.continent}
        </p>

        <h1 className="font-semibold text-gray-900 leading-none text-md mt-2 capitalize truncate py-1 dark:text-white">
          {props.title}
        </h1>

        <div className="max-w-full mt-3">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-1 overflow-y-auto h-40 dark:text-white style-overflow">
            {props.description}
          </p>
        </div>

        <div className="font-semibold text-gray-900 leading-none text-md mt-2 capitalize truncate py-1 dark:text-white">
          <div className="mb-3">Extension : {props.length}</div>
          Countries:
          <div className="mt-3">
            <p>
              {props.countries.map((res, index) => (
                <li className="mt-2" key={index}>{res}</li>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Card