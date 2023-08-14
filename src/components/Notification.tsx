type Props = {};

const Notification = (props: Props) => {
  return (
    <div className="text-white bg-red-500 h-12 px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer">
      Free delivery for all orders over Ksh500. Order your food now!
    </div>
  );
};

export default Notification;
