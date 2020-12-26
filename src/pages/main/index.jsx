import React, { Component } from 'react';
import styles from '@/pages/main/style.less';
import { Button, message, Table, Tag, Breadcrumb } from 'antd';
import Request from "@/utils/request";
import api from "@/utils/config";
import router from 'umi/router';
import { formatTimeSeconds } from "@/utils/utils";
import NewEntry from './components/NewEntry'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      record: null
    };
  }

  componentDidMount() {

  }

  // 添加
  add = () => {
    this.setState({
      isShow: true,
      record: null
    })
  }

  // 修改
  edit = (item) => {
    this.setState({
      isShow: true,
      record: item
    })
  }

  // 删除
  delete = (id) => {
    console.log(id)
  }

  // 关闭弹窗
  close = () => {
    this.setState({
      isShow: false,
    })
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
            <Tag color={'green'} onClick={this.edit.bind(this, record)}>
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
        title: "什么是新型冠状病毒？",
        content:
          "此次流行的冠状病毒为一种新发现的冠状病毒，国际病毒分类委员会命名为 SARS-Cov-2。因为人群缺少对新型病毒株的免疫力，所以人群普遍易感。",
      },
      {
        key: 2,
        id: 2,
        title: "新型冠状病毒肺炎由什么引起的？",
        content:
          "由 SARS-Cov-2 冠状病毒引起，WHO 将 SARS-Cov-2 感染导致的疾病命名为 COVID-19，其中多数感染可以导致肺炎，就称之为新型冠状病毒肺炎/新冠肺炎。传染源主要是新型冠状病毒感染的患者和无症状感染者， 在潜伏期即有传染性，发病后 5 天内传染性较强。",
      },
      {
        key: 3,
        id: 3,
        title: "冠状病毒的致病性如何？",
        content:
          "冠状病毒主要感染成人或较大儿童，引起普通感冒和咽喉炎，某些毒株还可引起成人腹泻。经呼吸道飞沫和密切接触传播是主要的传播途径。接触病 毒污染的物品也可造成感染。在相对封闭的环境中长时间暴露于高浓度气溶胶情况下存 在经气溶胶传播的可能。由于在粪便、尿液中可分离到新型冠状病毒，应注意其对 环境污染造成接触传播或气溶胶传播。",
      },
      {
        key: 4,
        id: 4,
        title: "新型冠状病毒与 SARS 病毒的区别是什么？",
        content:
          "新型冠状病毒与 SARS 病毒、MERS 病毒同属于冠状病毒这个大家族，是「兄弟姐妹」，基因序列有很多一样的地方，但不完全相同。传染性与 SARS 相比有待确定，致死率按照目前来看较 SARS 较低，但是不排除病毒变异的可能。",
      },
      {
        key: 5,
        id: 5,
        title: "新型冠状病毒会人传人吗？",
        content:
          "会。根据目前的证据，可以确定新型冠状病毒可以持续人传人。经呼吸道飞沫和密切接触传播是主要的传播途径。接触病 毒污染的物品也可造成感染。 在相对封闭的环境中长时间暴露于高浓度气溶胶情况下存 在经气溶胶传播的可能。 由于在粪便、尿液中可分离到新型冠状病毒，应注意其对 环境污染造成接触传播或气溶胶传播。新型冠状病毒具有一定的传播强度，如果不采取防护措施，理论上平均 1 名患者可以将病毒传播给 2～3 个人（尚无定论，详见下一个问题）。",
      },
      {
        key: 6,
        id: 6,
        title: "被治愈的人还会继续患病（被传染）吗？",
        content:
          "冠状病毒属于单链 RNA 病毒，容易变异，所以很难形成持续性免疫力。比如每年流行的流感病毒，都需要接种最新的疫苗，也是因为病毒类型经常会发生变化。新冠肺炎患者康复出院后仍有传播病毒风险，要求继续 14 天健康监测和医学观察。",
      },
      {
        key: 7,
        id: 7,
        title: "潜伏期能查出来吗？",
        content:
          "潜伏期可以通过对患者样本进行核酸检测，可以早期发现新型冠状病毒感染。",
      },
    ];
    return (
      <div className={styles.cardList}>
        <div className={styles.line}>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>病毒知识
            </Breadcrumb.Item>
          </Breadcrumb>
          <Button type="primary" className="add_button" onClick={this.add.bind(this)}>添加病毒知识</Button></div>
        <Table columns={columns} dataSource={data} />
        <NewEntry isOpen={this.state.isShow} record={this.state.record} callback={this.close}></NewEntry>
      </div>
    );
  }
}

export default Index;
