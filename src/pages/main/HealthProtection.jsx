import React, { Component } from 'react';
import styles from '@/pages/main/style.less';
import { Button, message, Table, Tag, Breadcrumb } from 'antd';
import Request from "@/utils/request";
import api from "@/utils/config";
import router from 'umi/router';
import { formatTimeSeconds } from "@/utils/utils";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  // 修改
  edit = (id) => {
    console.log(id)
  }

  // 删除
  delete = (id) => {
    console.log(id)
  }


  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'key',
        key: 'key',
        width: 80,
        //render: text => <a>{text}</a>,
      },
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: 300,
      },
      {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        ellipsis: true,
      },
      {
        title: '操作',
        key: 'action',
        width: 200,
        render: (text, record) => (
          <div>
            <Tag color={'green'} onClick={this.edit.bind(this, record.id)}>
              修改
            </Tag>
            <Tag color={'red'} onClick={this.delete.bind(this, record.id)}>
              删除
            </Tag>
          </div>
        ),
      },
    ];
    const data = [
      {
        key: 1,
        id: 1,
        title: "如何预防新型冠状病毒感染？",
        content:
          "预防新型冠状病毒感染，需采取以下措施：避免去疫情高发区,避免去人流密集的场所。避免到封闭、空气不流通的公共场所和人多聚集的地方，尤其是儿童、老年人和免疫力低下的人群。外出记得佩戴口罩。加强开窗通风。居家每天都要开窗通风一段时间。加强空气流通，可有效预防呼吸道传染病。注意个人卫生。勤洗手，用肥皂和流动水或者免洗洗手液洗手。打喷嚏或咳嗽的时候注意用纸巾或胳膊肘捂住口鼻，不要直接用双手捂住口鼻。及时观察就医。如果出现发热（尤其是高热不退）、咳嗽、气促等呼吸道感染症状，应及时佩戴口罩并及时就医。",
      },
      {
        key: 2,
        id: 2,
        title: "在家中怎样预防新型冠状病毒感染？",
        content:
          "增强卫生健康意识，适量运动，早睡早起，不熬夜可提高自身免疫力；保持良好的个人卫生习惯，咳嗽或者打喷嚏时用纸巾掩住口鼻，经常彻底洗手，不用脏手触摸眼睛、鼻口；居室多通风换气并保持整洁卫生；尽可能避免与有呼吸道症状的人密切接触；尽量避免到人多拥挤和空间密闭场所，如必须去佩戴口罩；避免接触野生动物或家畜家禽；坚持安全的饮食习惯，食用肉类和蛋类要煮熟；密切关注发热、咳嗽等症状，出现此类症状一定要及时就近就医。",
      },
      {
        key: 3,
        id: 3,
        title: "怎样选择口罩？",
        content:
          "戴口罩是阻断呼吸道分泌物传播的有效手段。目前市面上能看到的口罩主要有医用防护口罩（如 N95 口罩）、医用外科口罩和普通级别的一次性使用医用口罩。此外，市场上还有各种明星经常佩戴的棉布口罩、海绵口罩等「网红口罩」。市民日常防护选择医用外科口罩就好。N95 口罩的防病效果更好，但是透气性差，呼吸阻力大，不适合长时间佩戴。",
      },
      {
        key: 4,
        id: 4,
        title: "怎样正确佩戴口罩？",
        content:
          "戴口罩时，将折面完全展开，将嘴、鼻、下颌完全包住，然后压紧鼻夹，使口罩与面部完全贴合。戴口罩前应当洗手，或者在戴口罩过程中避免手接触到口罩内面，以降低口罩被污染的可能。要分清楚口罩的内外、上下，浅色为内侧，内侧应当贴着口鼻，深色侧朝外；有金属条（鼻夹）一端是口罩的上方。口罩要定期更换，不可内外侧戴反，更不能两面轮流戴。",
      },
      {
        key: 5,
        id: 5,
        title: "口罩过期了，还能使用吗？",
        content:
          "口罩过期原则上是不建议使用的。对于医用外科口罩来说都是消毒无菌的，过期了有可能会滋生细菌。现在情况特殊，如果使用过期口罩，需要检查一下存放的地方是否干燥，原包装是否发霉或者破损有异味、变色。如果没有这些情况，可以作为备用。",
      },
      {
        key: 6,
        id: 6,
        title: "在人流不密集的地方可以不带口罩吗？",
        content:
          "去人群密集的场所，因为人多、不通风，可能有病原在你周围，那戴口罩是必要的。但是人口不密集的地方，如果是开放的环境，病原体被稀释，不足以感染人，可以不戴口罩。但是如果自身有咳嗽、发烧等症状，为了防止传染别人，需要戴口罩。",
      },
      {
        key: 7,
        id: 7,
        title: "在家该如何预防新冠肺炎？",
        content:
          "确保室内空气流通，每星期至少彻底清洁家具环境一次。当物品表面或地面被呼吸道分泌物、呕吐物或排泄物污染时，应当先用吸水力强的即弃抹布清除可见的污垢，然后用适当的消毒剂清洁消毒受污染处及其附近地方。",
      },
      {
        key: 8,
        id: 8,
        title: "老年人、儿童等体弱人群有哪些防护措施？",
        content:
          "老年人是新型冠状病毒的易感人群，在疫情流行期间，应该做到不要出入人员密集的公共场所，减少不必要的社交活动，出行应该佩戴口罩、勤洗手，加强居家环境的清洁和消毒，保持室内空气流通。儿童是需要保护的重点人群，在勤洗手、少出行、戴口罩、多通风的同时，还应该叮嘱亲戚朋友避免对儿童，尤其是婴幼儿的近距离接触，比如亲吻、逗乐等。",
      },
      {
        key: 9,
        id: 9,
        title: "去人群聚集场所要注意采取哪些防护措施？",
        content:
          "高风险地区尽量避免去人群聚集的公共场所，以减少与患病人群接触的机会。如必须前往公共场所，要佩戴口罩以降低接触病原体的风险，前提是选择正确的口罩并正确的佩戴。同时应尽量避免去疾病流行地区以降低感染风险。",
      },

    ];
    return (
      <div className={styles.cardList}>
        <div className={styles.line}>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>健康科普
            </Breadcrumb.Item>
          </Breadcrumb>
          <Button type="primary" className="add_button">添加健康科普</Button></div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Index;