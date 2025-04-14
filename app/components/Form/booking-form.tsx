import { useState } from "react";

export const BookingForm = ({ title, slug, season }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    adress: "",
    city: "",
    destinationTitle: "",
    adults: "",
    children: "",
    departure: "",
    arrival: "",
    message: "",
    customerType: "",
    title: slug || "",
    season: season || "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckBox = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/booking-form", {
        method: "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: "",
          number: "",
          email: "",
          adress: "",
          city: "",
          destinationTitle: "",
          adults: "",
          children: "",
          departure: "",
          arrival: "",
          message: "",
          customerType: "",
          title: "",
          season: "",
        });
        setIsChecked(false);
      }
    } catch {
      throw new Error("failed");
    }
  };

  return (
    <form className="flex flex-col lg:w-[70%] " onSubmit={handleSubmit}>
      <h2 className="text-[30px] text-center mb-10">{title}</h2>
      <div className="lg:grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="name">För och efternamn*</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-[2px] border-black p-2  rounded-md"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mail">Mail*</label>
          <input
            type="text"
            id="mail"
            name="email"
            className="border-[2px] border-black p-2  rounded-md"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="adress">Gatuadress*</label>
          <input
            type="text"
            id="adress"
            name="adress"
            className="border-[2px] border-black p-2  rounded-md"
            value={formData.adress}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city">Stad*</label>
          <input
            type="text"
            id="city"
            name="city"
            className="border-[2px] border-black p-2  rounded-md"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="phone">Telefonnummer*</label>
          <input
            type="number"
            id="phone"
            name="number"
            className="border-[2px] border-black p-2  rounded-md"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="destinationTitle">Resnamn*</label>
          <input
            type="text"
            id="destinationTitle"
            name="destinationTitle"
            className="border-[2px] border-black p-2  rounded-md"
            value={formData.destinationTitle}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="adults" className="mb-1 font-medium">
            Antal vuxna
          </label>
          <select
            name="adults"
            id="adults"
            className="border-[2px] border-black p-2 rounded-md"
            defaultValue=""
            value={formData.adults}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Välj antal
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8 eller fler</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="children" className="mb-1 font-medium">
            Antal barn (0–15 år)
          </label>
          <select
            name="children"
            id="children"
            className="border-[2px] border-black p-2 rounded-md"
            defaultValue=""
            value={formData.children}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Välj antal
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4 eller fler</option>
          </select>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="departure">Ankomstdatum*</label>
          <input
            type="date"
            id="departure"
            name="departure"
            className="border-[2px] border-black p-2  rounded-md "
            value={formData.departure}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="arrival">Hemresedatum*</label>
          <input
            type="date"
            id="arrival"
            name="arrival"
            className="border-[2px] border-black p-2  rounded-md"
            value={formData.arrival}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <label htmlFor="message" className="mt-4">
        Övrig information
      </label>

      <textarea
        id="message"
        name="message"
        className="border-[2px] border-black p-2 h-[200px] rounded-md"
        value={formData.message}
        onChange={handleInputChange}
      />

      <div className="flex items-start gap-4 mt-4">
        <input
          type="checkbox"
          name="policy"
          id="policy"
          className="mt-2"
          checked={isChecked}
          onChange={handleCheckBox}
        />
        <div>
          Genom att skicka in detta formulär godkänner jag att mina
          personuppgifter hanteras enligt personuppgiftslagen.
        </div>
      </div>

      <button className="button max-w-[200px] mt-4" type="submit">
        Skicka
      </button>
    </form>
  );
};
