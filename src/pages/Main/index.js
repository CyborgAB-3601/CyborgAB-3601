import React from "react";

import { Stack, Column, Img, Text, Row, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/menuopentwo");
  }

  return (
    <>
      <Stack className="font-inter 3xl:h-[1124px] lg:h-[666px] xl:h-[833px] 2xl:h-[937px] mx-[auto] w-[100%]">
        <Column className="absolute bg-gradient17  h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[91%]">
          <Column className="bg-gradient18  justify-start 2xl:px-[110px] 3xl:px-[132px] lg:px-[78px] xl:px-[98px] rounded-radius30 w-[100%]">
            <Img
              src="images/img_aibar.png"
              className="lg:h-[30px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[125px] xl:ml-[157px] 2xl:ml-[176px] 3xl:ml-[212px] rounded-radius185 w-[50%]"
              alt="AIbar"
            />
            <Column
              className="bg-cover bg-repeat justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[22px] xl:p-[28px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius19 w-[86%]"
              style={{ backgroundImage: "url('images/img_adboxcentre.png')" }}
            >
              <Column className="justify-start lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] lg:ml-[169px] xl:ml-[212px] 2xl:ml-[238px] 3xl:ml-[286px] w-[37%]">
                <Text
                  className="font-bold 3xl:ml-[102px] lg:ml-[60px] xl:ml-[76px] 2xl:ml-[85px] text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Future of{" "}
                </Text>
                <Text className="EDUCATION" as="h4" variant="h4">
                  EDUCATION
                </Text>
              </Column>
            </Column>
            <Row className="items-center lg:ml-[127px] xl:ml-[159px] 2xl:ml-[178px] 3xl:ml-[214px] lg:mt-[41px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] w-[48%]">
              <Input
                className="font-bold p-[0] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                wrapClassName="w-[87%]"
                name="GroupSixteen"
                placeholder="Search for topics? Type here"
              ></Input>
              <Img
                src="images/img_info.svg"
                className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                alt="info"
              />
            </Row>
            <Column className="items-center justify-end lg:ml-[112px] xl:ml-[140px] 2xl:ml-[157px] 3xl:ml-[189px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[57%]">
              <Column className="items-center justify-end w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h6" variant="h6">
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
                    <Column className="bg-gradient10  border border-solid border-white_A700 items-center justify-start lg:mt-[48px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius20 w-[100%]">
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
        </Column>
        <aside className="absolute inset-y-[0] left-[0] my-[auto] w-[29%]">
          <div className="">
            <Column className="justify-start w-[100%]">
              <Row className="items-start w-[39%]">
                <Column className="bg-bluegray_400_4c items-center justify-start lg:py-[14px] xl:py-[18px] 2xl:py-[20px] 3xl:py-[24px] w-[80%]">
                  <Stack className="bg-bluegray_100 3xl:h-[111px] lg:h-[66px] xl:h-[83px] 2xl:h-[93px] px-[1px] rounded-radius50 3xl:w-[110px] lg:w-[65px] xl:w-[82px] 2xl:w-[92px]">
                    <Img
                      src="images/img_userprofilemini.png"
                      className="absolute 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] inset-[0] justify-center m-[auto] 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"
                      alt="UserProfilemini"
                    />
                  </Stack>
                  <Stack className="lg:h-[354px] xl:h-[443px] 2xl:h-[498px] 3xl:h-[598px] lg:mb-[164px] xl:mb-[205px] 2xl:mb-[230px] 3xl:mb-[276px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[69px] 3xl:mt-[83px] w-[100%]">
                    <Stack className="absolute lg:h-[354px] xl:h-[443px] 2xl:h-[498px] 3xl:h-[598px] w-[100%]">
                      <Img
                        src="images/img_polygon1.png"
                        className="absolute bottom-[24%] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] lg:h-[95px] rounded-radius20 w-[100%]"
                        alt="PolygonOne"
                      />
                      <Column className="absolute bg-black_900_4c border border-solid border-white_A700_72 inset-x-[15%] items-center justify-start lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius405 w-[70%]">
                        <Button
                          className="flex lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          size="smIcn"
                          variant="icbGradientCyan600Indigo500"
                        >
                          <Img
                            src="images/img_calendericon.png"
                            className="flex items-center justify-center lg:h-[40px] xl:h-[51px] 2xl:h-[57px] 3xl:h-[68px]"
                            alt="CalenderIcon"
                          />
                        </Button>
                        <Img
                          src="images/img_fileicon.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[97%]"
                          alt="FileIcon"
                        />
                        <div className="bg-bluegray_100 lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[52px] 3xl:mt-[63px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"></div>
                        <Stack className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[52px] 3xl:mt-[63px] w-[97%]">
                          <div className="absolute bg-gradient4  lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] right-[1%] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"></div>
                          <Button
                            className="absolute flex lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center left-[1%] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                            size="xlIcn"
                            variant="icbFillBlack90033"
                          >
                            <Img
                              src="images/img_plus.svg"
                              className="flex items-center justify-center lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px]"
                              alt="plus"
                            />
                          </Button>
                        </Stack>
                      </Column>
                    </Stack>
                    <Img
                      src="images/img_targeticon.png"
                      className="absolute bottom-[28%] 2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[90px] inset-x-[0] mx-[auto] 2xl:w-[100px] 3xl:w-[120px] lg:w-[71px] xl:w-[89px]"
                      alt="TargetIcon One"
                    />
                  </Stack>
                </Column>
                <Img
                  src="images/img_horizontalswip.png"
                  className="common-pointer lg:h-[424px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] xl:mt-[100px] 2xl:mt-[112px] 3xl:mt-[135px] lg:mt-[80px] rounded-radius145 w-[20%]"
                  onClick={handleNavigate2}
                  alt="Horizontalswip"
                />
              </Row>
              <Stack className="lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:h-[2px] w-[100%]">
                <Column className="absolute bg-indigo_900 bottom-[0] items-end justify-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] w-[100%]">
                  <Row className="items-center justify-end lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[6px] w-[51%]">
                    <Column className="bg-gradient7  lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center mb-[1px] px-[4px] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <Button
                        className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        size="mdIcn"
                        variant="icbFillBlack901"
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          className="flex items-center justify-center lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px]"
                          alt="arrowleft"
                        />
                      </Button>
                    </Column>
                    <Column className="bg-gradient7  lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[1px] px-[3px] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <Button
                        className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center mb-[2px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        size="mdIcn"
                        variant="icbFillBlack901"
                      >
                        <Img
                          src="images/img_microphone.svg"
                          className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px]"
                          alt="microphone"
                        />
                      </Button>
                    </Column>
                    <Column className="bg-gradient7  lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center mb-[1px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] px-[4px] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
                      <Button
                        className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        size="mdIcn"
                        variant="icbFillBlack900"
                      >
                        <Img
                          src="images/img_computer.svg"
                          className="flex items-center justify-center lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px]"
                          alt="computer"
                        />
                      </Button>
                    </Column>
                  </Row>
                </Column>
                <Column className="absolute bottom-[0] items-center justify-end left-[1%] w-[58%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Img
                      src="images/img_ellipse230.png"
                      className="lg:h-[42px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] rounded-radius50 lg:w-[41px] xl:w-[52px] 2xl:w-[58px] 3xl:w-[70px]"
                      alt="Ellipse230"
                    />
                    <Column className="justify-start w-[73%]">
                      <Text
                        className="font-bold text-green_500 w-[auto]"
                        variant="body2"
                      >
                        Connected
                      </Text>
                      <Text
                        className="font-bold leading-[normal] ml-[1px] mt-[3px] text-white_A700 w-[99%]"
                        variant="body2"
                      >
                        Nivet
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Stack>
            </Column>
          </div>
        </aside>
        <Column className="absolute bottom-[0] justify-start right-[0] w-[25%]">
          <Text
            className="lg:ml-[21px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] text-white_A700 w-[auto]"
            as="h6"
            variant="h6"
          >
            Your Actvity
          </Text>
          <Stack className="2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[91px] mt-[2px] w-[100%]">
            <Img
              src="images/img_rectangle1.png"
              className="absolute lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px] left-[0] rounded-radius85 top-[0] w-[50%]"
              alt="RectangleOne"
            />
            <Stack className="absolute bg-indigo_900 border border-gray_602 border-solid bottom-[0] 3xl:h-[102px] lg:h-[60px] xl:h-[76px] 2xl:h-[85px] inset-x-[0] mx-[auto] px-[2px] w-[97%]">
              <Stack className="absolute lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[57px] left-[6%] top-[12%] w-[78%]">
                <Text
                  className="absolute bottom-[10%] left-[2%] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  00:59:00
                </Text>
                <div className="absolute bg-gradient15  lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[57px] rounded-radius10 w-[100%]"></div>
              </Stack>
              <Column className="absolute bg-gradient16  items-center justify-start p-[1px] right-[10%] rounded-radius315 top-[0] w-[20%]">
                <Button
                  className="flex items-center justify-center mb-[1px] w-[95%]"
                  shape="icbCircleBorder29"
                  size="mdIcn"
                  variant="icbFillBlack900"
                >
                  <Img
                    src="images/img_group28.png"
                    className="flex items-center justify-center"
                    alt="GroupTwentySix"
                  />
                </Button>
              </Column>
            </Stack>
          </Stack>
        </Column>
      </Stack>
    </>
  );
};

export default MainPage;
