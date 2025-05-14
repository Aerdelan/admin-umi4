import react, { useEffect, useState } from "react";
import { hellow, getUserInfo } from "@/services/user/index";
import { Button, Space, Input } from "antd";
const UserAdd: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [value2, setValue2] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const getHelloWorld = async () => {
        const res = await hellow();
        setValue(res.greeting)
    }

    const getUser = async (v: string) => {
        console.log(v, '查询的用户名称');

        const res = await getUserInfo({ username: v });
        console.log(res, '查询到的用户数据');
    }
    return (
        <div>
            <Space>
                <div>
                    <Button type="primary" onClick={() => getHelloWorld()}>
                        点击获取hello,world
                    </Button>
                    <Input placeholder="请输入" value={value} onChange={e => setValue(e.target.value)} />
                </div>
                <div>
                    <Input placeholder="请输入用户名" value={userName} onChange={e => setUserName(e.target.value)} />
                    <Button type="primary" onClick={() => getUser(userName)}>
                        点击查询用户
                    </Button>
                    <Input placeholder="请输入" value={value2} onChange={e => setValue2(e.target.value)} />
                </div>
                <div>
                    <Input placeholder="请输入用户名" value={userName} onChange={e => setUserName(e.target.value)} />
                    <Input placeholder="请输入密码" value={value2} onChange={e => setValue2(e.target.value)} />
                    <Button type="primary" onClick={() => getUser(userName)}>
                        点击添加用户
                    </Button>
                </div>
            </Space >
        </div >
    );
}

export default UserAdd;