/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import { Icon, Avatar, Popover } from "@lugia/lugia-web";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 60px;
  background: #ffffff;
  position: relative;
`;

const SwitchMenuListButton = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #999999;
`;

const ActionListContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 60px;
`;

const InputWrap = styled.div`
  margin-right: 30px;
  height: 32px;
  width: 151px;
  background: #f5f5f9;
  border-radius: 30px;
  padding: 0 10px;
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translateY(-60%);
`;

const SearchButton = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  font-size: 16px;
  color: #999999;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = styled.input`
  width: 100px;
  height: 28px;
  margin-left: 8px;
  border: 0;
  outline: 0;
  font-size: 12px;
  background: #f5f5f9;
  color: #999999;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const CommonIconWrap = styled.div`
  width: 24px;
  height: 24px;
  font-size: 21px;
  color: #999999;
  display: inline-block;
  position: relative;
  top: 50%;
  margin-left: 26px;
  transform: translateY(-50%);
`;

const AvatarWrap = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  // overflow: hidden;
  vertical-align: top;
  cursor: pointer;
  margin-left: 26px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default class Header extends React.Component<> {
  render() {
    return (
      <HeaderContainer>
        <SwitchMenuListButton>
          <Icon iconClass="lugia-icon-direction_menu_food" />
        </SwitchMenuListButton>
        <ActionListContainer>
          <InputWrap>
            <SearchButton>
              <Icon iconClass="lugia-icon-financial_search" />
            </SearchButton>
            <Input placeholder={"站内搜索"} />
          </InputWrap>

          <CommonIconWrap>
            <Popover
              placement="bottom"
              action={"hover"}
              description={[
                <div onClick={e => this.goDoc()}>使用文档</div>
              ]}
            >
              <div>
                <Icon iconClass="lugia-icon-financial_folder_open" />
              </div>
            </Popover>
          </CommonIconWrap>

          <CommonIconWrap>
            <Popover
              placement="bottom"
              action={"hover"}
              description={
                <div onClick={e => this.goPersonalCenter()}>个人中心</div>
              }
            >
              <div>
                <Icon iconClass="lugia-icon-financial_home" />
              </div>
            </Popover>
          </CommonIconWrap>

          <CommonIconWrap>
            <Popover
              placement="bottom"
              action={"hover"}
              description={[
                <div onClick={e => this.goSetting()}>个人设置</div>,
              ]}
            >
              <div>
                <Icon iconClass="lugia-icon-financial_setting" />
              </div>
            </Popover>
          </CommonIconWrap>
          <AvatarWrap>
            <Popover
              placement="bottom"
              action={"hover"}
              description={[
                <div onClick={e => this.onClick()}>退出登陆</div>
              ]}
            >
              <div>
                <Avatar
                  shape={"circle"}
                  src="http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg"
                  msgNum={99}
                  size={"small"}
                />
              </div>
            </Popover>
          </AvatarWrap>
        </ActionListContainer>
      </HeaderContainer>
    );
  }

  onClick = () => {
    go({ url: "/login" });
  };
  goDoc = () => {
    go({ url: "/login" });
  };
  goPersonalCenter = () => {
    go({ url: "/login" });
  };
  goSetting = () => {
    go({ url: "/login" });
  };
}
