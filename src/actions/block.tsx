import { createBlock } from '../api/block'
import { Dialog, Form, Input } from '@alifd/next'


const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        fixedSpan: 8
    },
    wrapperCol: {
        span: 14
    }
};
const SaveAsBlock = ({ node }) => {
    const handleSubmit = () => {
        console.log(node.schema)
        alert('将schema保存到数据库')
    }
    return <Form style={{ width: "60%" }} {...formItemLayout} colon>
        <FormItem
            name="blockName"
            label="区块名称"
        >
            <Input />
        </FormItem>
        <FormItem label=" " colon={false}>
            <Form.Submit
                type="primary"
                validate
                onClick={handleSubmit}
                style={{ marginRight: 8 }}
            >
                Submit
            </Form.Submit>
        </FormItem>
    </Form>
}
export default {
    name: 'add',
    content: {
        icon: 'add',
        title: '新增',
        action(node: Node) {
            // console.log(node.schema)
            Dialog.show({
                v2: true,
                title: "Custom",
                content: <SaveAsBlock node={node} />,
                footer: false
            });
            // createBlock()v
        }
    },

}