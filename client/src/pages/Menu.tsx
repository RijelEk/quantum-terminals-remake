import React, {useState} from 'react'
import LayoutMenu from "@/components/Layout/Layout_menu";
import { Box } from "@/UI/Boxes/Box";
import { Button } from "@/UI/Buttons/Primary";
import { useHistory } from 'react-router-dom';
import { pathLogin, pathRegister, pathLobby } from '@/app/config/paths';
import Loading from "@/UI/Loading/Loading";
import { mockUser } from "@/app/config/mockUser";
import { getIp } from '@/utils/getIp';

export default function Menu() {

  const history = useHistory();
  const [loggin, setLoggin] = useState<boolean>(false);
  const loginAsAnonimUser = async () => {
    setLoggin(true);
    const IP = await getIp(); // Get user ip
    console.log(IP);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setTimeout(() => {
      history.push(pathLobby())
    }, 2000)
  };

  if (loggin) {
    return (
      <LayoutMenu logo={false}>
        <Loading />
      </LayoutMenu>
    )
  }

  return (
    <LayoutMenu logo>
      <Box disp="flex" fd="column">
        <Box mb={ 20 }>
        <Button
          text="Login"
          src="/public/images/menu/dots.png"
          onClick={()=>history.push(pathLogin())}
        />
        </Box>
        <Box mb={ 20 }>
        <Button
          text="Register"
          src="/public/images/menu/dots.png"
          onClick={()=>history.push(pathRegister())}
        />
        </Box>
        <Box >
        <Button
          text="Go anonim"
          src="/public/images/menu/dots.png"
          onClick={()=>loginAsAnonimUser()}
        />
        </Box>
      </Box>
    </LayoutMenu>
  )
}
