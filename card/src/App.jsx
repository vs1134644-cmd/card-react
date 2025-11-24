import React from 'react'
import Card from './components/Card';

const App = () => {

const users = [
      {
        profilePic:
          "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=600",
        userName: "Amit Sharma",
        email: "amitt.sharma1@example.com",
      },

      {
        profilePic:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
        userName: "Priya Kumar",
        email: "priya.verma2@example.com",
      },
      {
        profilePic:
          "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=600",
        userName: "Rohit Kumar",
        email: "rohit.kumar3@example.com",
      },
      {
        profilePic:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
        userName: "Sneha Gupta",
        email: "sneha.gupta4@example.com",
      },
      {
        profilePic:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
        userName: "Arjun Yadav",
        email: "arjun.yadav5@example.com",
      },
      {
        profilePic:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
        userName: "Simran Kaur",
        email: "simran.kaur6@example.com",
      },
      {
        profilePic:
          "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600",
        userName: "Rahul Mehta",
        email: "rahul.mehta7@example.com",
      },
      {
        profilePic:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600",
        userName: "Neha Singh",
        email: "neha.singh8@example.com",
      },
      {
        profilePic:
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
        userName: "Vikram Joshi",
        email: "vikram.joshi9@example.com",
      },
      {
        profilePic:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
        userName: "Kiran Patel",
        email: "kiran.patel10@example.com",
      },
    {
  profilePic:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
  userName: "Ayushi Reddy",
  email: "ayushi.reddy35@example.com",
},
{
  profilePic:
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600",
  userName: "Niharika Sharma",
  email: "niharika.sharma36@example.com",
},
{
  profilePic:
    "https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_1280.jpg",
  userName: "Shivani Nair",
  email: "shivani.nair37@example.com",
},
{
  profilePic:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
  userName: "Pooja Sen",
  email: "pooja.sen38@example.com",
},
{
  profilePic:
    "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=600",
  userName: "Aditi Mishra",
  email: "aditi.mishra39@example.com",
},
{
  profilePic:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600",
  userName: "Suhani Tripathi",
  email: "suhani.tripathi40@example.com",
},
      
   ];
  return (
    <div className=' grid grid-cols-4'>
      {users.map((user, index) => {

    return <Card key={index} data={user}/>

      })}

    </div>
  )
}

export default App;


