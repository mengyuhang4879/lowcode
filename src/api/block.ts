
export const createBlock = async (block) => {
    let url = 'https://documents.ablula.tech/api/schemas'
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        schema
      }),
    });
    // if(res.code=='00000'){
    //   Message.success('保存成功');
    // }else {
    //   Message.error('保存失败');
    // }
  };
  