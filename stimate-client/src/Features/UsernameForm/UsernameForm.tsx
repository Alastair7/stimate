import { Button, Form, FormProps, Input } from "antd";
import { setUsername } from "./domain";
import "./usernameForm.css";
type FieldType = {
  username: string;
};

type Props = {
  setShowUsernameForm: (value: boolean) => void;
};
const UsernameForm = ({ setShowUsernameForm }: Props) => {
  const onFinish: FormProps<FieldType>["onFinish"] = ({
    username,
  }: FieldType) => {
    setUsername(username);
    setShowUsernameForm(false);
  };

  return (
    <div className="username_form__wrapper">
      <h1>Hey Stranger, what's your name?</h1>
      <Form
        name="basic"
        autoComplete="off"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "You need a username." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Done
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { UsernameForm };
