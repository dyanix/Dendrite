import { Button } from "../ui/button";

const Create = () => {
  return (
    <>
      
      <form className="form col-span-12 mt-5 outline-8 outline-slate-700 p-4  rounded-lg border border-black">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control my-2 p-2 border border-black rounded"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Generate Room code"
              disabled
              className="form-control p-2 border border-black rounded mr-2"
            />
            <div className="flex space-x-2">
              <Button type="button" variant="gray">
                Generate
              </Button>
              <Button type="button" variant="destructive">
                Copy
              </Button>
            </div>
          </div>
        </div>
        <Button type="submit"  className="mt-4">
          Create Room
        </Button>
      </form>
    </>
  );
};

export default Create;
