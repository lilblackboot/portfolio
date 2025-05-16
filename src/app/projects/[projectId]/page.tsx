export default async function Page(params: { params: { projectId: string } }) {
  const { projectId } =await params.params;
  return (
    <div className="w-full h-screen flex items-start justify-center ">
      <h1 className="pt-15 bg-gradient-to-b text-center w-full text-6xl">
        Project {projectId}
      </h1>
      <div></div>
    </div>
  );
}