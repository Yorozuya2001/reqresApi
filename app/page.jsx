import Users from "@/components/Users";

const IndexPage = async () => {
  const users = await fetchUsers();
  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default IndexPage;

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}
