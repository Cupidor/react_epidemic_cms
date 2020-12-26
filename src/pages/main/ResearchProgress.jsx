import React, { Component } from 'react';
import styles from '@/pages/main/style.less';
import { Button, Card, List, message, Typography, Table, Tag, Space } from 'antd';
import Request from "@/utils/request";
import api from "@/utils/config";
import router from 'umi/router';
import { formatTimeSeconds } from "@/utils/utils";
const { Paragraph } = Typography;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log(this.props)
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
        title:
          "国家药监局药审中心（CDE）正式受理国药集团北京生物新冠疫苗上市申请",
        content: [
          "12 月 23 日，国家药监局官网显示，CDE 已经正式受理了国药集团北京生物制品研究所研发的新冠病毒灭活疫苗上市申请。国药集团在本月初提交了上市申请。这款疫苗是国内研发试验走在最前列的三款疫苗之一，已在国内各地紧急接种使用。",
        ],
      },
      {
        key: 2,
        title: "欧盟批准辉瑞/BioNTech 新冠疫苗上市使用",
        content: [
          "当地时间 12 月 21 日，欧盟委员会批准了辉瑞/BioNTech 新冠疫苗的上市应用申请，因此辉瑞/BioNTech 新冠疫苗也成为欧盟批准的首支新冠疫苗。在此之前，英美等国已经批准使用并且开始了大规模接种。欧盟各国将陆续得到辉瑞/BioNTech 新冠疫苗，德国的接种预计于 26 日开始。",
        ],
      },
      {
        key: 3,
        title: "我国新冠疫苗接种将分「两步走」",
        content: [
          "12 月 19 日，国务院联防联控机制召开新冠病毒疫苗相关发布会，会上就疫苗接种相关工作做了介绍。在冬春季节到来之际，对部分重点人群开展新冠疫苗接种工作，包括冷链物流、海关边检、医疗疾控、农贸市场、公共交通等工作人员。后续随着生产供应能力的稳步提升，对涉及数亿人的老年人和有基础疾病的高危人群，以及普通人群的接种工作将会全面、有序铺开。",
        ],
      },
      {
        key: 4,
        title: "美国正式批准 Moderna 新冠疫苗紧急上市使用",
        content: [
          "当地时间 12 月 18 日，FDA 批准了 Moderna 新冠疫苗的紧急上市使用申请。这是继辉瑞/BioNTech 新冠疫苗后，美国上市的第二款新冠疫苗。Moderna 疫苗同为较先进的核酸疫苗，III 期临床试验展示出良好的保护效果。预计年底前将有 2000 万支 Moderna 疫苗交付给美国使用。",
        ],
      },
      {
        key: 5,
        title: "美国有望批准第二种新冠疫苗",
        content: [
          "当地时间 12 月 17 日，FDA 专家委员会以 20:1 的投票建议 FDA 批准 Moderna 新冠疫苗。目前辉瑞/BioNTech 疫苗是美国唯一批准使用的新冠疫苗，12 月 10 日被专家委员会建议批准，11 日即正式批准。Moderna 疫苗也是核酸疫苗，在之前公布的临床数据中展现出良好的保护效果。",
        ],
      },
      {
        key: 6,
        title: "美国出现首例接种辉瑞/BioNTech 新冠疫苗后严重过敏反应",
        content: [
          "本周，美国阿拉斯加州同一家医院的两名医护人员均在接种辉瑞新冠疫苗后接受急救。其中一人过敏症状典型，送入重症监护室治疗。另一人疑似过敏表现。阿拉斯加州首席医疗官 Anne Zink 表示，目前没有改变接种计划的打算。这两个病例可能会加剧人们对新冠疫苗可能的副作用的担忧。辉瑞/BioNTech 新冠疫苗是目前唯一被美国政府批准使用的新冠疫苗。",
        ],
      },
      {
        key: 7,
        title: "辉瑞/BioNTech 新冠疫苗将进入中国市场",
        content: [
          "复星医药公司宣布，已经与 BioNTech 公司达成协议，将在未来采购 1 亿剂辉瑞/BioNTech 新冠疫苗。如果中国大陆批准该疫苗上市应用，国内民众也有有望用上进口疫苗了。辉瑞/BioNTech 新冠疫苗是全球最早被批准的新冠疫苗，在英国、美国均已上市应用，属于较为先进的 mRNA 疫苗。国内目前紧急接种的 4 款新冠疫苗主要是灭活疫苗和病毒载体疫苗。",
        ],
      },
      {
        key: 8,
        title: "俄罗斯卫星 V 新冠疫苗公布有效率约为 91.4%",
        content: [
          "作为全球首个被紧急批准使用的新冠疫苗，俄罗斯卫星 V 疫苗在开始给人群接种时甚至都没有完成 III 期临床试验。今天，卫星 V 的临床数据才姗姗来迟，整体有效率达到了 91.4%，而且在疫苗接种组中没有出现一例重症感染。卫星 V 的研发机构也将与同样生产腺病毒载体疫苗的阿斯利康公司展开合作，共同测试提高疫苗的有效性。",
        ],
      },
      {
        key: 9,
        title: "赛诺菲疫苗研究受挫，临床试验计划拖延",
        content: [
          "就在辉瑞旗下疫苗被美国批准使用，赚足眼球的同一天，之前跟辉瑞疫苗同列为最被关注疫苗的赛诺菲疫苗公布了令人失望的 II 期临床数据。在 II 期临床观察中，疫苗对老年人的保护未达预期。原定于 12 月开始的 III 期临床竟被推迟到至少明年 2 月。2021 年能上市的希望渺茫。",
        ],
      },
    ];
    return (
      <div className={styles.cardList}>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Index;
