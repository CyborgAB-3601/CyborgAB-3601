import React from "react";

import { Row, Column, Img, Text, Input } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const MenuopenPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/main");
  }

  return (
    <>
      <Row className="font-inter items-center mx-[auto] py-[3px] w-[100%]">
        <Sidebar className="mt-[2px] w-[29%]" />
        <Column className="bg-bluegray_901 mt-[2px] w-[71%]">
          <Row className="items-start w-[79%]">
            <Img
              src="images/img_horizontalswip.png"
              className="common-pointer lg:h-[424px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] xl:mt-[118px] 2xl:mt-[132px] 3xl:mt-[159px] lg:mt-[94px] rounded-radius145 w-[4%]"
              onClick={handleNavigate1}
              alt="Horizontalswip"
            />
            <Column className="items-center justify-start xl:ml-[117px] 2xl:ml-[131px] 3xl:ml-[158px] lg:ml-[93px] w-[80%]">
              <Img
                src="images/img_aibar.png"
                className="lg:h-[30px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[50px] rounded-radius185 w-[85%]"
                alt="AIbar"
              />
              <Column
                className="bg-cover bg-repeat justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[52px] 3xl:mt-[63px] lg:p-[22px] xl:p-[28px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius19 w-[95%]"
                style={{ backgroundImage: "url('images/img_adboxcentre.png')" }}
              >
                <Column className="justify-start mb-[4px] lg:ml-[56px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] w-[59%]">
                  <Text
                    className="font-bold xl:ml-[108px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Future of{" "}
                  </Text>
                  <Text className="EDUCATION" as="h4" variant="h4">
                    EDUCATION
                  </Text>
                </Column>
              </Column>
              <Row className="items-center justify-end ml-[auto] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[82%]">
                <Input
                  className="font-bold p-[0] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="w-[87%]"
                  name="GroupOne"
                  placeholder="Search for topics? Type here"
                ></Input>
                <Img
                  src="images/img_info.svg"
                  className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                  alt="info"
                />
              </Row>
              <Column className="items-center justify-end lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] w-[98%]">
                <Column className="justify-end w-[100%]">
                  <Text
                    className="ml-[3px] text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Where should we start
                  </Text>
                  <Row className="items-start justify-between lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]">
                    <Column
                      className="bg-cover bg-repeat items-center justify-start xl:pt-[119px] 2xl:pt-[133px] 3xl:pt-[160px] lg:pt-[95px] rounded-radius20 w-[36%]"
                      style={{
                        backgroundImage: "url('images/img_blogvertical1.png')",
                      }}
                    >
                      <Column
                        className="bg-cover bg-repeat justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius24 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group74.png')",
                        }}
                      >
                        <Text
                          className="font-bold leading-[normal] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] text-white_A700 w-[69%]"
                          variant="body2"
                        >
                          <span className="text-white_A700 font-inter lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px]">
                            Improve <br />
                          </span>
                          <span className="text-cyan_A400 font-inter lg:text-[24px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[40px]">
                            Learning
                          </span>
                        </Text>
                        <Text
                          className="font-bold leading-[normal] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] text-white_A700 w-[94%]"
                          variant="body2"
                        >
                          This blog will give an insight on.
                        </Text>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[58%]">
                      <Column className="bg-gradient8  justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius20 w-[97%]">
                        <Text className="ContinueFro" variant="body2">
                          Continue...
                          <br />
                          From where you left
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient9  lg:mb-[25px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] ml-[1px] mt-[1px] text-transparent w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          EQUILIBRIUM
                        </Text>
                      </Column>
                      <Column className="bg-gradient10  border border-solid border-white_A700 items-center justify-start lg:mt-[55px] xl:mt-[69px] 2xl:mt-[77px] 3xl:mt-[93px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius20 w-[100%]">
                        <Row className="items-start justify-between lg:mb-[38px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[64px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[98%]">
                          <Img
                            src="images/img_chart.png"
                            className="xl:h-[107px] 2xl:h-[120px] 3xl:h-[144px] lg:h-[85px] mt-[1px] xl:w-[106px] 2xl:w-[119px] 3xl:w-[143px] lg:w-[84px]"
                            alt="Chart"
                          />
                          <Column className="justify-start w-[62%]">
                            <Text className="Youhavemade" variant="body2">
                              You have made
                            </Text>
                            <Text className="EightyThree" as="h1" variant="h1">
                              83%
                            </Text>
                            <Text className="PROGRESS" variant="body2">
                              PROGRESS
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default MenuopenPage;
