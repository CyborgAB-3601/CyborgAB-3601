import React from "react";

import { Row, Column, Img, Text, Stack } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const MenuopenTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/main");
  }

  return (
    <>
      <Row className="font-inter items-center mx-[auto] py-[3px] w-[100%]">
        <Sidebar className="mt-[2px] w-[29%]" />
        <Column className="bg-bluegray_901 font-jockeyone mt-[2px] lg:pb-[22px] xl:pb-[28px] 2xl:pb-[31px] 3xl:pb-[37px] lg:pr-[22px] xl:pr-[28px] 2xl:pr-[31px] 3xl:pr-[37px] w-[71%]">
          <Column className="items-center justify-start w-[97%]">
            <Img
              src="images/img_aibar.png"
              className="lg:h-[30px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[50px] rounded-radius185 w-[57%]"
              alt="AIbar"
            />
            <Row className="items-start 3xl:mt-[109px] lg:mt-[64px] xl:mt-[81px] 2xl:mt-[91px] w-[100%]">
              <Img
                src="images/img_horizontalswip.png"
                className="common-pointer lg:h-[424px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] rounded-radius145 w-[3%]"
                onClick={handleNavigate}
                alt="Horizontalswip"
              />
              <Column
                className="bg-cover bg-repeat items-center justify-start 3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[93px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] 2xl:pt-[104px] 3xl:pt-[125px] lg:pt-[74px] xl:pt-[93px] rounded-radius30 w-[40%]"
                style={{ backgroundImage: "url('images/img_changelog.png')" }}
              >
                <Column
                  className="bg-cover bg-repeat justify-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius24 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group74.png')" }}
                >
                  <Text
                    className="bg-clip-text bg-gradient19  lg:mr-[38px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic text-transparent w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Changelog
                  </Text>
                  <Text
                    className="font-normal leading-[normal] lg:mb-[21px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[36px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mr-[132px] xl:mr-[165px] 2xl:mr-[185px] 3xl:mr-[222px] mt-[1px] not-italic text-black_900 w-[46%]"
                    variant="body2"
                  >
                    check here for latest changes
                  </Text>
                </Column>
              </Column>
              <Stack className="lg:h-[540px] xl:h-[676px] 2xl:h-[760px] 3xl:h-[912px] lg:ml-[44px] xl:ml-[55px] 2xl:ml-[61px] 3xl:ml-[74px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[40%]">
                <Img
                  src="images/img_rectangle1060.png"
                  className="absolute bottom-[1%] lg:h-[535px] xl:h-[669px] 2xl:h-[753px] 3xl:h-[903px] rounded-radius30 w-[100%]"
                  alt="Rectangle1060"
                />
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-center justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius24 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group74.png')" }}
                >
                  <Column className="justify-start lg:mb-[48px] xl:mb-[60px] 2xl:mb-[67px] 3xl:mb-[81px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[52px] 3xl:mt-[63px] w-[98%]">
                    <Text
                      className="bg-clip-text bg-gradient20  not-italic text-transparent w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Wanna help us
                    </Text>
                    <Text
                      className="leading-[normal] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic text-black_900 w-[67%]"
                      variant="body1"
                    >
                      Help us test latest builds and give ur oppinions on the
                      latest features
                    </Text>
                  </Column>
                </Column>
              </Stack>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default MenuopenTwoPage;
