import React from "react";

import { Column, Row, Stack, Img, Button, Text, Input, List } from "components";

const DesktopappPage = () => {
  return (
    <>
      <Column className="bg-gradient11  font-inter justify-start mx-[auto] pr-[4px] py-[4px] w-[100%]">
        <Row className="items-center lg:mb-[134px] xl:mb-[168px] 2xl:mb-[189px] 3xl:mb-[226px] rounded-radius20 w-[89%]">
          <Stack className="lg:h-[589px] xl:h-[736px] 2xl:h-[828px] 3xl:h-[993px] w-[29%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Column className="bg-bluegray_400_4c items-center lg:py-[12px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] w-[31%]">
                  <Stack className="bg-bluegray_100 lg:h-[59px] xl:h-[73px] 2xl:h-[83px] 3xl:h-[99px] px-[1px] rounded-radius50 lg:w-[58px] xl:w-[72px] 2xl:w-[82px] 3xl:w-[98px]">
                    <Img
                      src="images/img_userprofilemini.png"
                      className="absolute lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] inset-[0] justify-center m-[auto] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      alt="UserProfilemini"
                    />
                  </Stack>
                  <Stack className="lg:h-[315px] xl:h-[394px] 2xl:h-[443px] 3xl:h-[531px] lg:mb-[145px] xl:mb-[182px] 2xl:mb-[205px] 3xl:mb-[246px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                    <Stack className="absolute lg:h-[315px] xl:h-[394px] 2xl:h-[443px] 3xl:h-[531px] w-[100%]">
                      <Img
                        src="images/img_polygon1.png"
                        className="absolute bottom-[24%] xl:h-[105px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[84px] rounded-radius20 w-[100%]"
                        alt="PolygonOne"
                      />
                      <Column className="absolute bg-black_900_4c border border-solid border-white_A700_72 inset-x-[15%] items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius405 w-[70%]">
                        <Button
                          className="flex lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] items-center justify-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius50 lg:w-[48px] xl:w-[60px] 2xl:w-[68px] 3xl:w-[81px]"
                          size="smIcn"
                          variant="icbGradientCyan600Indigo500"
                        >
                          <Img
                            src="images/img_calendericon.png"
                            className="flex items-center justify-center lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px]"
                            alt="CalenderIcon"
                          />
                        </Button>
                        <Img
                          src="images/img_fileicon.png"
                          className="lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[97%]"
                          alt="FileIcon"
                        />
                        <div className="bg-bluegray_100 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] rounded-radius50 lg:w-[48px] xl:w-[60px] 2xl:w-[68px] 3xl:w-[81px]"></div>
                        <Stack className="lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[97%]">
                          <div className="absolute bg-gradient4  lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] right-[1%] rounded-radius50 lg:w-[48px] xl:w-[60px] 2xl:w-[68px] 3xl:w-[81px]"></div>
                          <Button
                            className="absolute flex lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] items-center justify-center left-[1%] rounded-radius50 lg:w-[48px] xl:w-[60px] 2xl:w-[68px] 3xl:w-[81px]"
                            size="xlIcn"
                            variant="icbFillBlack90033"
                          >
                            <Img
                              src="images/img_plus.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="plus"
                            />
                          </Button>
                        </Stack>
                      </Column>
                    </Stack>
                    <Img
                      src="images/img_targeticon.png"
                      className="absolute bottom-[28%] 3xl:h-[107px] lg:h-[64px] xl:h-[80px] 2xl:h-[90px] inset-x-[0] mx-[auto] 3xl:w-[106px] lg:w-[63px] xl:w-[79px] 2xl:w-[89px]"
                      alt="TargetIcon One"
                    />
                  </Stack>
                </Column>
                <Column className="bg-bluegray_900_75 items-center xl:pb-[117px] 2xl:pb-[132px] 3xl:pb-[158px] lg:pb-[93px] shadow-bs w-[69%]">
                  <Stack className="lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] w-[100%]">
                    <Column className="absolute justify-end p-[1px] top-[0] w-[100%]">
                      <Text
                        className="leading-[normal] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-shadow-ts text-white_A700 w-[49%]"
                        variant="body3"
                      >
                        Welcome <br />
                        CyborgAB !
                      </Text>
                    </Column>
                    <Img
                      src="images/img_wave_66X56.png"
                      className="absolute lg:h-[47px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] right-[0] top-[0] w-[22%]"
                      alt="Wave"
                    />
                  </Stack>
                  <Input
                    className="font-bold p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="2xl:mt-[28px] 3xl:mt-[33px] flex lg:mt-[19px] w-[80%] xl:mt-[24px]"
                    name="Home"
                    placeholder="Home"
                    prefix={
                      <Img
                        src="images/img_home.svg"
                        className="lg:w-[19px] lg:h-[20px] lg:mx-[4px] xl:w-[24px] xl:h-[25px] xl:ml-[5px] xl:mr-[6px] 2xl:w-[28px] 2xl:h-[29px] 2xl:ml-[6px] 2xl:mr-[7px] 3xl:w-[33px] 3xl:h-[34px] 3xl:ml-[7px] 3xl:mr-[8px] my-[auto]"
                        alt="home"
                      />
                    }
                    shape="RoundedBorder6"
                    size="lg"
                    variant="FillGray900b2"
                  ></Input>
                  <Stack className="lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[80%]">
                    <Img
                      src="images/img_printer.svg"
                      className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] inset-y-[0] left-[8%] my-[auto] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      alt="printer"
                    />
                    <Text
                      className="absolute bg-gray_900_19 font-bold 2xl:pb-[11px] 3xl:pb-[13px] lg:pb-[7px] xl:pb-[9px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] rounded-radius6 text-white_A700_7f w-[204px]"
                      variant="body2"
                    >
                      Categories
                    </Text>
                  </Stack>
                  <Stack className="lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[80%]">
                    <Img
                      src="images/img_search.svg"
                      className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] inset-y-[0] left-[9%] my-[auto] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      alt="search"
                    />
                    <Button
                      className="absolute font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillGray90019"
                    >
                      Analytics
                    </Button>
                  </Stack>
                  <Input
                    className="font-bold p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-white_A700_7f text-white_A700_7f w-[100%]"
                    wrapClassName="2xl:mt-[34px] 3xl:mt-[40px] flex lg:mt-[24px] w-[80%] xl:mt-[30px]"
                    name="Settings"
                    placeholder="Settings"
                    prefix={
                      <Img
                        src="images/img_settings.svg"
                        className="lg:w-[19px] lg:h-[20px] lg:ml-[4px] lg:mr-[6px] xl:w-[24px] xl:h-[25px] xl:ml-[6px] xl:mr-[8px] 2xl:w-[28px] 2xl:h-[29px] 2xl:ml-[7px] 2xl:mr-[9px] 3xl:w-[33px] 3xl:h-[34px] 3xl:ml-[8px] 3xl:mr-[10px] my-[auto]"
                        alt="settings"
                      />
                    }
                    shape="RoundedBorder6"
                    size="xl"
                    variant="FillGray90019"
                  ></Input>
                  <div className="font-spacegrotesk 2xl:mt-[112px] 3xl:mt-[134px] lg:mt-[79px] xl:mt-[99px] overflow-x-auto w-[100%]">
                    <Stack className="lg:h-[139px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] w-[100%]">
                      <Column
                        className="absolute bg-cover bg-repeat h-[max-content] inset-[0] justify-center m-[auto] p-[3px] rounded-radius20 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_tokens.svg')",
                        }}
                      >
                        <Column className="bg-gradient5  justify-center lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius20 w-[93%]">
                          <Text
                            className="mt-[1px] not-italic text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Total Earnings
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient6  font-normal leading-[normal] my-[3px] not-italic text-transparent w-[43%]"
                            as="h4"
                            variant="h4"
                          >
                            <span className="text-orange_500 font-spacegrotesk lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
                              200
                              <br />
                            </span>
                            <span className="text-orange_500 font-spacegrotesk lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                              {" "}
                              coins
                            </span>
                          </Text>
                        </Column>
                      </Column>
                      <Img
                        src="images/img_coins.png"
                        className="absolute lg:h-[139px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] right-[0] w-[83%]"
                        alt="coins"
                      />
                    </Stack>
                  </div>
                </Column>
              </Row>
            </Column>
            <Row className="absolute bg-indigo_900 bottom-[0] inset-x-[0] items-start justify-between p-[2px] w-[100%]">
              <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[46%]">
                <Row className="items-start justify-between w-[100%]">
                  <Img
                    src="images/img_ellipse230.png"
                    className="lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] rounded-radius50 lg:w-[36px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[62px]"
                    alt="Ellipse230"
                  />
                  <Column className="justify-start mt-[1px] w-[65%]">
                    <Text
                      className="font-bold text-green_500 w-[auto]"
                      variant="body2"
                    >
                      Connected
                    </Text>
                    <Text
                      className="font-bold ml-[1px] mt-[1px] text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Nivet
                    </Text>
                  </Column>
                </Row>
              </Column>
              <List
                className="lg:gap-[13px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-3 min-h-[auto] mr-[3px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]"
                orientation="horizontal"
              >
                <Column className="bg-gradient7  lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-start mb-[1px] px-[4px] rounded-radius50 w-[100%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    size="mdIcn"
                    variant="icbFillBlack901"
                  >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                      alt="arrowleft"
                    />
                  </Button>
                </Column>
                <Column className="bg-gradient7  lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-start mt-[1px] px-[3px] rounded-radius50 w-[100%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center mb-[2px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    size="mdIcn"
                    variant="icbFillBlack901"
                  >
                    <Img
                      src="images/img_microphone.svg"
                      className="flex items-center justify-center lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px]"
                      alt="microphone"
                    />
                  </Button>
                </Column>
                <Column className="bg-gradient7  lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-start mb-[1px] px-[4px] rounded-radius50 w-[100%]">
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    size="mdIcn"
                    variant="icbFillBlack900"
                  >
                    <Img
                      src="images/img_computer.svg"
                      className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                      alt="computer"
                    />
                  </Button>
                </Column>
              </List>
            </Row>
          </Stack>
          <Column className="bg-bluegray_901 items-center w-[52%]">
            <Row className="items-start justify-between w-[97%]">
              <Img
                src="images/img_horizontalswip.png"
                className="lg:h-[377px] xl:h-[471px] 2xl:h-[530px] 3xl:h-[636px] xl:mt-[104px] 2xl:mt-[118px] 3xl:mt-[141px] lg:mt-[83px] rounded-radius145 w-[5%]"
                alt="Horizontalswip"
              />
              <Column className="items-center justify-start w-[91%]">
                <Img
                  src="images/img_aibar.png"
                  className="lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius185 w-[83%]"
                  alt="AIbar"
                />
                <Column
                  className="bg-cover bg-repeat justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius19 w-[93%]"
                  style={{
                    backgroundImage: "url('images/img_adboxcentre.png')",
                  }}
                >
                  <Column className="justify-start mb-[4px] lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] w-[59%]">
                    <Text
                      className="font-bold 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[76px] xl:ml-[96px] text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Future of{" "}
                    </Text>
                    <Text className="EDUCATION" as="h4" variant="h4">
                      EDUCATION
                    </Text>
                  </Column>
                </Column>
                <Row className="items-center lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[80%]">
                  <Input
                    className="font-bold p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="w-[87%]"
                    name="GroupThirtyThree"
                    placeholder="Search for topics? Type here"
                  ></Input>
                  <Img
                    src="images/img_info.svg"
                    className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                    alt="info"
                  />
                </Row>
                <Column className="justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[96%]">
                  <Text
                    className="ml-[3px] text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Where should we start
                  </Text>
                  <Row className="items-start justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                    <Column
                      className="bg-cover bg-repeat items-center justify-end xl:pt-[105px] 2xl:pt-[119px] 3xl:pt-[142px] lg:pt-[84px] rounded-radius20 w-[36%]"
                      style={{
                        backgroundImage: "url('images/img_blogvertical1.png')",
                      }}
                    >
                      <Column
                        className="bg-cover bg-repeat justify-end lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius24 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group74.png')",
                        }}
                      >
                        <Text
                          className="font-bold leading-[normal] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] text-white_A700 w-[69%]"
                          variant="body2"
                        >
                          <span className="text-white_A700 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                            Improve <br />
                          </span>
                          <span className="text-cyan_A400 font-inter lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
                            Learning
                          </span>
                        </Text>
                        <Text
                          className="font-bold leading-[normal] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-white_A700 w-[94%]"
                          variant="body2"
                        >
                          This blog will give an insight on.
                        </Text>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[58%]">
                      <Column className="bg-gradient8  justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[97%]">
                        <Text className="ContinueFro" variant="body2">
                          Continue...
                          <br />
                          From where you left
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient9  lg:mb-[22px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] ml-[1px] mt-[1px] text-transparent w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          EQUILIBRIUM
                        </Text>
                      </Column>
                      <Stack className="lg:h-[126px] xl:h-[158px] 2xl:h-[178px] 3xl:h-[213px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]">
                        <div className="absolute bg-gradient10  border border-solid border-white_A700 bottom-[0] lg:h-[158px] xl:h-[197px] 2xl:h-[222px] 3xl:h-[266px] rounded-radius20 w-[100%]"></div>
                        <Row className="absolute bottom-[8%] inset-x-[0] items-start justify-between mx-[auto] w-[92%]">
                          <Img
                            src="images/img_chart.png"
                            className="2xl:h-[107px] 3xl:h-[128px] lg:h-[76px] xl:h-[95px] mt-[1px] 2xl:w-[106px] 3xl:w-[127px] lg:w-[75px] xl:w-[94px]"
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
                      </Stack>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
          <Column className="bg-indigo_901 border border-gray_501 border-solid items-end w-[19%]">
            <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[98%]">
              <Button
                className="absolute bottom-[15%] flex items-center justify-center right-[8%] w-[13%]"
                size="smIcn"
                variant="icbOutlinePurpleA701"
              >
                <Img
                  src="images/img_close.svg"
                  className="flex items-center justify-center lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px]"
                  alt="close"
                />
              </Button>
              <div className="absolute bg-indigo_900_11 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] outline outline-[1px] outline-gray_501 w-[100%]"></div>
            </Stack>
            <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[89%]">
              <Stack className="lg:h-[195px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] w-[100%]">
                <Column
                  className="absolute bg-cover bg-repeat items-center justify-end lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] top-[0] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group46.svg')" }}
                >
                  <Stack className="bg-gradient12  lg:h-[106px] xl:h-[132px] 2xl:h-[149px] 3xl:h-[178px] lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] px-[4px] rounded-radius50 lg:w-[105px] xl:w-[131px] 2xl:w-[148px] 3xl:w-[177px]">
                    <Img
                      src="images/img_userprofilemini.png"
                      className="absolute xl:h-[123px] 2xl:h-[139px] 3xl:h-[166px] lg:h-[99px] inset-[0] justify-center m-[auto] xl:w-[122px] 2xl:w-[138px] 3xl:w-[165px] lg:w-[98px]"
                      alt="imageOne"
                    />
                  </Stack>
                </Column>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-[auto] text-white_A700 w-[max-content]"
                  as="h6"
                  variant="h6"
                >
                  CyborgAB
                </Text>
              </Stack>
              <Text
                className="font-bold lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-gray_601 w-[auto]"
                variant="body2"
              >
                @Abhinav
              </Text>
            </Column>
            <Input
              className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-white_A700 text-white_A700 w-[100%]"
              wrapClassName="2xl:mt-[29px] 3xl:mt-[34px] lg:mt-[20px] w-[74%] xl:mt-[25px]"
              name="Streak"
              placeholder="Streak"
              size="sm"
              variant="GradientBlue500Bluegray60000"
            ></Input>
            <Text
              className="lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              Inbox
            </Text>
            <Stack className="xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] mt-[2px] w-[93%]">
              <div className="absolute bg-gradient13  2xl:h-[112px] 3xl:h-[134px] lg:h-[79px] xl:h-[99px] left-[0] rounded-radius20 top-[0] w-[95%]"></div>
              <Column className="absolute bg-gradient14  bottom-[0] items-center justify-start 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] right-[0] rounded-radius20 w-[95%]">
                <Column className="justify-start mb-[4px] w-[90%]">
                  <Row className="items-start w-[76%]">
                    <Img
                      src="images/img_ellipse234.png"
                      className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="Ellipse234"
                    />
                    <Text
                      className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[3px] text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Vishal
                    </Text>
                  </Row>
                  <Text
                    className="leading-[normal] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-black_900 w-[95%]"
                    variant="body4"
                  >
                    Bro,I have doubt in Chemistry.Equilbrium
                  </Text>
                </Column>
              </Column>
            </Stack>
            <div className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] overflow-x-auto w-[100%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Your Actvity
                </Text>
                <Stack className="3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] mt-[2px] w-[100%]">
                  <Stack className="absolute 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] w-[100%]">
                    <Img
                      src="images/img_rectangle1.png"
                      className="absolute lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] left-[0] rounded-radius85 top-[0] w-[49%]"
                      alt="RectangleOne"
                    />
                    <Stack className="absolute bg-indigo_900 border border-gray_602 border-solid bottom-[0] lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] right-[0] w-[95%]">
                      <Text
                        className="absolute left-[4%] text-white_A700 top-[9%] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        00:59:00
                      </Text>
                      <div className="absolute bg-gradient15  lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] left-[2%] rounded-radius10 top-[0] w-[78%]"></div>
                    </Stack>
                  </Stack>
                  <Column className="absolute bg-gradient16  bottom-[2%] lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center justify-start px-[2px] right-[7%] rounded-radius50 lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                    <Button
                      className="flex lg:h-[53px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] items-center justify-center mb-[2px] rounded-radius50 lg:w-[52px] xl:w-[65px] 2xl:w-[74px] 3xl:w-[88px]"
                      size="lgIcn"
                      variant="icbFillBlack900"
                    >
                      <Img
                        src="images/img_group28.png"
                        className="flex items-center justify-center lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px]"
                        alt="GroupTwentyEight"
                      />
                    </Button>
                  </Column>
                </Stack>
              </Column>
            </div>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DesktopappPage;
