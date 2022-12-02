import React, { useState } from 'react';
// import { Button, Dialog } from '@alifd/next';
import { Button, Modal, Tag } from 'antd'
import { common, project, config, event } from '@alilc/lowcode-engine';
import { default as store } from './store';
export default () => {
    console.log(222)
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        console.log(222)
        setVisible(true)
    }

    const blockAry = [
        {
            id: '1',
            name: '自定义1',
            schema: {
                "componentName": "NextCol",
                "id": "node_oclb634o0n68",
                "props": {
                    "colSpan": 1,
                    "justifyContent": "flex-start"
                },
                "title": "列",
                "isLocked": false,
                "condition": true,
                "conditionGroup": "",
                "children": [
                    {
                        "componentName": "NextRow",
                        "id": "node_oclb634o0n63",
                        "props": {},
                        "docId": "doclb634o0n",
                        "title": "行",
                        "isLocked": false,
                        "condition": true,
                        "conditionGroup": "",
                        "children": [
                            {
                                "componentName": "NextCol",
                                "id": "node_oclb634o0n64",
                                "props": {
                                    "colSpan": 1
                                },
                                "docId": "doclb634o0n",
                                "title": "列",
                                "isLocked": false,
                                "condition": true,
                                "conditionGroup": "",
                                "children": [
                                    {
                                        "componentName": "NextP",
                                        "id": "node_oclb634o0n7w",
                                        "props": {
                                            "wrap": false,
                                            "type": "body2",
                                            "verAlign": "middle",
                                            "textSpacing": true,
                                            "align": "left"
                                        },
                                        "docId": "doclb634o0n",
                                        "title": "段落",
                                        "isLocked": false,
                                        "condition": true,
                                        "conditionGroup": "",
                                        "children": [
                                            {
                                                "componentName": "Button",
                                                "id": "node_oclb634o0n7x",
                                                "props": {
                                                    "prefix": "next-",
                                                    "type": "primary",
                                                    "size": "medium",
                                                    "htmlType": "button",
                                                    "component": "button",
                                                    "children": "取消",
                                                    "iconSize": "xxs",
                                                    "ghost": false,
                                                    "loading": false,
                                                    "text": false,
                                                    "warning": false,
                                                    "disabled": false
                                                },
                                                "docId": "doclb634o0n",
                                                "title": "",
                                                "isLocked": false,
                                                "condition": true,
                                                "conditionGroup": ""
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "componentName": "NextP",
                        "id": "node_oclb634o0nai",
                        "props": {
                            "wrap": false,
                            "type": "body2",
                            "verAlign": "middle",
                            "textSpacing": true,
                            "align": "left"
                        },
                        "docId": "doclb634o0n",
                        "title": "段落",
                        "isLocked": false,
                        "condition": true,
                        "conditionGroup": "",
                        "children": [
                            {
                                "componentName": "Divider",
                                "id": "node_oclb634o0naj",
                                "props": {
                                    "prefix": "next-",
                                    "direction": "hoz",
                                    "orientation": "center",
                                    "children": "分隔符",
                                    "dashed": false
                                },
                                "docId": "doclb634o0n",
                                "title": "",
                                "isLocked": false,
                                "condition": true,
                                "conditionGroup": ""
                            }
                        ]
                    },
                    {
                        "componentName": "NextRow",
                        "id": "node_oclb634o0n65",
                        "props": {},
                        "docId": "doclb634o0n",
                        "title": "行",
                        "isLocked": false,
                        "condition": true,
                        "conditionGroup": "",
                        "children": [
                            {
                                "componentName": "NextCol",
                                "id": "node_oclb634o0n66",
                                "props": {
                                    "colSpan": 1
                                },
                                "docId": "doclb634o0n",
                                "title": "列",
                                "isLocked": false,
                                "condition": true,
                                "conditionGroup": "",
                                "children": [
                                    {
                                        "componentName": "NextP",
                                        "id": "node_oclb634o0n97",
                                        "props": {
                                            "wrap": false,
                                            "type": "body2",
                                            "verAlign": "middle",
                                            "textSpacing": true,
                                            "align": "left"
                                        },
                                        "docId": "doclb634o0n",
                                        "title": "段落",
                                        "isLocked": false,
                                        "condition": true,
                                        "conditionGroup": "",
                                        "children": [
                                            {
                                                "componentName": "Icon",
                                                "id": "node_oclb634o0n98",
                                                "props": {
                                                    "type": "smile"
                                                },
                                                "docId": "doclb634o0n",
                                                "title": "",
                                                "isLocked": false,
                                                "condition": true,
                                                "conditionGroup": ""
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ]

    const registerAdditive = (shell: HTMLDivElement | null) => {
        console.log('shell: ', shell);
        if (!shell || shell.dataset.registered) {
            return;
        }

        function getSnippetId(elem: any) {
            if (!elem) {
                return null;
            }
            while (shell !== elem) {
                console.log('elem.classList; ', elem.classList);
                if (elem.classList.contains('snippet')) {
                    return elem.dataset.id;
                }
                elem = elem.parentNode;
            }
            return null;
        }

        const _dragon = common.designerCabin.dragon
        console.log('_dragon: ', _dragon);
        if (!_dragon) {
            return;
        }

        // eslint-disable-next-line
        const click = (e: Event) => { };

        shell.addEventListener('click', click);

        _dragon.from(shell, (e: Event) => {
            const doc = project.getCurrentDocument();
            const id = getSnippetId(e.target);
            console.log('doc: ', doc);
            console.log('id: ', id);
            if (!doc || !id) {
                return false;
            }

            console.log('store.get(id): ', store.get(id));

            const dragTarget = {
                type: 'nodedata',
                data: store.get(id),
            };

            return dragTarget;
        });

        shell.dataset.registered = 'true';
    };
    return <>
        <Button onClick={handleClick}>页面插件</Button>
        <Modal title="Basic Modal" open={visible}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
        <div className='block-pane' ref={registerAdditive}>
            {
                blockAry.map(v => <span className='snippet' id={v.id}>{v.name}</span>)
            }
        </div>

        {/* <Dialog
            v2
            title="Welcome to Alibaba.com"
            visible={visible}
        >
            <p>Start your business here by searching a popular product</p>
        </Dialog> */}
    </>
}