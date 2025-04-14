import { BookingForm } from "@/app/components/Form/booking-form";

import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

export const PriceBlock = ({ res, slug }: any) => {
  const [showForm, setShowForm] = useState(false);

  const handleForm = (season: any) => {
    setShowForm(season ? season : null);
  };

  return (
    <>
      <div className="flex justify-center lg:max-w-[100%]  lg:px-14   lg:pb-10 ">
        <div className="lg:w-[73%] mx-auto py-10 ">
          <h3 className="text-[30px] mb-5">{res?.price_title}</h3>

          <div className=" flex gap-2 lg:grid  lg:grid-cols-4">
            <div>
              <div className="mb-10 text-[20px]">{res?.roomstype_title}</div>

              {res?.fields?.map((item: any) => (
                <div key={item._uid} className="mb-10">
                  <div>{item.room_type}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="mb-10 text-[20px]">{res?.season_title}</div>

              {res?.fields?.map((item: any) => (
                <div key={item._uid} className="mb-10">
                  <div>{item.season}</div>
                </div>
              ))}
            </div>
            <div>
              <div className=" text-[20px] mb-10">{res?.price_title}</div>

              {res?.fields?.map((item: any) => (
                <div key={item._uid} className="mb-10">
                  <div>{item.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-16 w-[70%] lg:w-auto">
              {res?.fields?.map((item: any) => (
                <div key={item._uid} className="mb-5">
                  <button
                    className="bg-[#b18b52] p-2 lg:pl-8 lg:pr-8 text-white text-center rounded-[29px]"
                    onClick={() => handleForm(item?.season)}
                  >
                    {item?.button}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {showForm && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => handleForm(null)}
            >
              <div
                className="bg-white p-8 rounded-lg lg:max-w-[70%] w-full relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-black text-xl mt-4 mr-4"
                  onClick={() => handleForm(null)}
                >
                  <RiCloseLargeLine fontSize={30} />
                </button>
                <div className="flex justify-center mt-10">
                  <BookingForm title={showForm} slug={slug} season={showForm} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
