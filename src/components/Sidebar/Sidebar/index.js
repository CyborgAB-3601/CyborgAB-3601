import React from "react";

import { Stack, Column, Row, Img, Button, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Stack className="3xl:h-[1118px] lg:h-[662px] xl:h-[828px] 2xl:h-[932px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Column className="bg-bluegray_400_4c items-center lg:py-[14px] xl:py-[18px] 2xl:py-[20px] 3xl:py-[24px] w-[31%]">
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
                <Column className="bg-bluegray_900_75 items-center lg:pb-[105px] xl:pb-[132px] 2xl:pb-[148px] 3xl:pb-[178px] shadow-bs w-[69%]">
                  <Stack className="lg:h-[50px] xl:h-[63px] 2xl:h-[70px] 3xl:h-[84px] w-[100%]">
                    <Column className="absolute justify-end p-[1px] top-[0] w-[100%]">
                      <Text
                        className="font-inter leading-[normal] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-shadow-ts text-white_A700 w-[49%]"
                        variant="body3"
                      >
                        Welcome <br />
                        CyborgAB !
                      </Text>
                    </Column>
                    <Img
                      src="images/img_wave.png"
                      className="absolute lg:h-[54px] xl:h-[68px] 2xl:h-[76px] 3xl:h-[91px] right-[0] top-[0] w-[22%]"
                      alt="Wave"
                    />
                  </Stack>
                  <Row className="bg-gray_900_b2 items-center justify-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius6 w-[80%]">
                    <Img
                      src="images/img_home.svg"
                      className="lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] mb-[1px] lg:ml-[5px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      alt="home"
                    />
                    <Text
                      className="font-bold font-inter lg:ml-[5px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] 3xl:mr-[114px] lg:mr-[68px] xl:mr-[85px] 2xl:mr-[95px] text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Home
                    </Text>
                  </Row>
                  <Stack className="lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] w-[80%]">
                    <Img
                      src="images/img_printer.svg"
                      className="absolute lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-y-[0] left-[8%] my-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      alt="printer"
                    />
                    <Text
                      className="absolute bg-gray_900_19 font-bold font-inter xl:pb-[11px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pt-[13px] xl:pt-[17px] 2xl:pt-[19px] 3xl:pt-[22px] lg:px-[28px] xl:px-[35px] 2xl:px-[39px] 3xl:px-[47px] rounded-radius6 text-white_A700_7f w-[204px]"
                      variant="body2"
                    >
                      Categories
                    </Text>
                  </Stack>
                  <Stack className="lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] w-[80%]">
                    <Img
                      src="images/img_search.svg"
                      className="absolute lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] inset-y-[0] left-[9%] my-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      alt="search"
                    />
                    <Button
                      className="absolute font-bold font-inter lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-center w-[100%]"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillGray90019"
                    >
                      Analytics
                    </Button>
                  </Stack>
                  <Row className="bg-gray_900_19 items-center justify-center lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius6 w-[80%]">
                    <Img
                      src="images/img_settings.svg"
                      className="lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      alt="settings"
                    />
                    <Text
                      className="font-bold font-inter 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mr-[45px] xl:mr-[57px] 2xl:mr-[64px] 3xl:mr-[76px] text-white_A700_7f w-[auto]"
                      variant="body2"
                    >
                      Settings
                    </Text>
                  </Row>
                  <div className="xl:mt-[112px] 2xl:mt-[126px] 3xl:mt-[151px] lg:mt-[89px] overflow-x-auto w-[100%]">
                    <Stack className="lg:h-[156px] xl:h-[196px] 2xl:h-[220px] 3xl:h-[264px] w-[100%]">
                      <Column
                        className="absolute bg-cover bg-repeat h-[max-content] inset-[0] justify-center m-[auto] p-[3px] rounded-radius20 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_tokens.svg')",
                        }}
                      >
                        <Column className="bg-gradient5  justify-center lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius20 w-[93%]">
                          <Text
                            className="font-spacegrotesk mt-[1px] not-italic text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Total Earnings
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient6  font-normal font-spacegrotesk leading-[normal] my-[3px] not-italic text-transparent w-[43%]"
                            as="h4"
                            variant="h4"
                          >
                            <span className="text-orange_500 lg:text-[40px] xl:text-[50px] 2xl:text-[56px] 3xl:text-[67px]">
                              200
                              <br />
                            </span>
                            <span className="text-orange_500 lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px]">
                              {" "}
                              coins
                            </span>
                          </Text>
                        </Column>
                      </Column>
                      <Img
                        src="images/img_coins.png"
                        className="absolute lg:h-[156px] xl:h-[196px] 2xl:h-[220px] 3xl:h-[264px] right-[0] w-[83%]"
                        alt="coins"
                      />
                    </Stack>
                  </div>
                </Column>
              </Row>
            </Column>
            <Row className="absolute bg-indigo_900 bottom-[0] inset-x-[0] items-start justify-between p-[2px] w-[100%]">
              <Column className="items-center justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[46%]">
                <Row className="items-start justify-between w-[100%]">
                  <Img
                    src="images/img_ellipse230.png"
                    className="lg:h-[42px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] rounded-radius50 lg:w-[41px] xl:w-[52px] 2xl:w-[58px] 3xl:w-[70px]"
                    alt="Ellipse230"
                  />
                  <Column className="justify-start mt-[1px] w-[65%]">
                    <Text
                      className="font-bold font-inter text-green_500 w-[auto]"
                      variant="body2"
                    >
                      Connected
                    </Text>
                    <Text
                      className="font-bold font-inter ml-[1px] mt-[1px] text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Nivet
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Row className="items-center justify-between mr-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[50%]">
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
                <Column className="bg-gradient7  lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center mt-[1px] px-[3px] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
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
                <Column className="bg-gradient7  lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center mb-[1px] px-[4px] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]">
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
            </Row>
          </Stack>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
