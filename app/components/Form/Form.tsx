import { render } from 'storyblok-rich-text-react-renderer'

const Form = ({ title }: any) => {
  return (
    <div className="py-20 flex flex-col w-full justify-center items-center">
      <span className="text-center mb-10 text-[29px]">{render(title)}</span>
      <form className="flex flex-col m-auto form">
        <input type="text" name="name" placeholder="Namn" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea rows={10} name="message" placeholder="Meddelande" />
        <button className="button max-w-[200px]">Skicka</button>
      </form>
    </div>
  )
}

export default Form
