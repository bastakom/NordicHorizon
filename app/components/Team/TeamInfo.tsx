export const TeamInfo = ({ data }: any) => {
  const { content } = data.content_image;
  const { title_image } = data;

  return (
    <div className="bg-[#E9EFED] grid gap-10 ml-0 lg:ml-5 p-10 text-center">
      <h1 className="text-[29px] max-w-[100%] lg:max-w-[70%] font-light leading-[35px] mx-auto">
        {title_image}
      </h1>
      <div className="text-[17px] flex flex-col gap-5 max-w-[100%] lg:max-w-[80%] font-light oneheroblock mx-auto">
        {content.map((el: any, index: number) => (
          <div key={index}>
            {el.content?.map((element: any, subIndex: number) => {
              if (element.marks) {
                return (
                  <div className="inline-flex gap-2" key={subIndex}>
                    <p className="font-bold">{element.text}</p>
                  </div>
                );
              }
              return <p key={subIndex}>{element.text}</p>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
