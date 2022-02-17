import React from "react";

import "./Event.scss";
import event1 from "../../assets/images/event1.png";
import { Button } from "../../components";
import Task from "./Task";
import { AnimateSharedLayout, motion } from "framer-motion";

const Event: React.FC = () => {
  const renderEventContent = (
    <div className="event_route_content">
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultricies ultrices
        ultricies pulvinar arcu,{" "}
      </h2>
      <div className="flex-between mb-15 mb-30">
        <b>1 Feb 2022</b>
        <Button variant="secondary">Join contest</Button>
      </div>
      <img src={event1} alt="event" className="event_route_content-image" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget aliquam et ut cras ut
        lorem cras duis. Dictum tempor ipsum egestas sollicitudin mauris. Consectetur eget augue
        posuere accumsan nunc natoque nibh erat. Blandit vitae pellentesque vehicula purus tortor
        hac ullamcorper tempus. Lobortis vestibulum nisl elementum blandit egestas. Cras amet,
        integer curabitur nibh. Nisl nisi at turpis adipiscing. Adipiscing in nec metus diam
        ultricies in facilisis auctor. Mauris pellentesque est at pretium. Amet pellentesque nulla
        scelerisque ut dis justo. Non faucibus libero nunc faucibus dignissim libero quis at. Dolor
        imperdiet sit nulla arcu amet tristique eget. Velit enim, eu amet, ornare ut viverra ac
        mattis euismod. Ultrices turpis luctus quis enim. Netus condimentum sed amet cursus ac.
        Libero vel amet, non quis nibh in. Pharetra et non dui nibh convallis tristique cursus eu.
        In est diam at nullam facilisis lobortis quam elementum, tellus. Tellus interdum odio
        maecenas commodo sit blandit id. Nulla purus blandit amet a at in. Massa elementum et mollis
        felis id magna aliquam. A amet felis varius elit. Gravida sit vitae augue risus. Elementum
        nunc ultrices fames pellentesque vitae nibh. Hendrerit et, dui curabitur netus lectus
        molestie a, convallis. Odio tristique urna sit quis in tempus viverra malesuada vel. A
        dolor, malesuada amet sed venenatis vitae congue. Nec at quam sed mollis turpis adipiscing
        eget dolor consectetur. In luctus condimentum risus eu. Amet, sapien nullam pellentesque
        sapien ipsum egestas convallis facilisis mauris. Augue aliquet cursus suspendisse mattis
        vitae. Nulla eu suspendisse ante amet nunc ac sed lacinia magna. Nulla ipsum convallis eget
        suspendisse vulputate eu vitae. Elementum aliquet turpis morbi vulputate quis libero nisl.
        Libero malesuada risus non sit feugiat. Erat quam et in sed sed rhoncus. Dictum id urna
        aenean pellentesque sagittis rutrum ultricies purus egestas. Eu sagittis vestibulum rhoncus
        habitant nullam sollicitudin tellus enim facilisi. Convallis pulvinar ut id integer egestas
        neque augue metus sed. Auctor porttitor turpis a massa amet hendrerit. Id laoreet nunc
        pellentesque non eget vel. Sed laoreet purus in consequat eu nullam ultrices. Non sagittis,
        turpis malesuada commodo vehicula quam. Sit donec dui, quis urna suspendisse congue.
        Hendrerit at vitae eu nunc enim, donec cras ut egestas. Facilisis id sit enim arcu quis
        hendrerit leo consectetur. Purus ultrices etiam enim venenatis nunc. Turpis vulputate
        pellentesque odio ipsum amet adipiscing in non. Aliquam pellentesque faucibus viverra
        facilisis morbi duis congue at aliquam. Vel integer aliquet quis amet, habitant cursus
        morbi. Sit et habitant nisi quis sed. Nisl phasellus at morbi etiam duis. Enim magnis sapien
        consectetur tempus at quis nulla. Morbi convallis dui, aliquam dolor luctus turpis. Massa,
        sodales malesuada mauris facilisis tellus facilisi. Quam egestas nisl, magna orci, commodo
        magna purus accumsan et. Nibh ac eget facilisis in egestas amet nisl. Tempor, tellus
        habitasse pulvinar donec. Enim nulla urna turpis lectus quis tincidunt viverra lectus.
        Vulputate ut lectus ipsum mi gravida.
      </p>
    </div>
  );

  return (
    <div>
      <div className="event_route">
        <div className="pad">{renderEventContent}</div>
      </div>
      <div className="event_tasks">
        <div className="pad">
          <h2>Complete tasks and get rewarded</h2>
          <p className="mb-30 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc sollicitudin at
            ut lobortis in phasellus est. Mollis semper id vitae in eget.{" "}
          </p>
          <AnimateSharedLayout>
            <motion.div layout className="event_tasks_wrapper">
              {Array.from({ length: 5 }).map((_, i) => {
                return <Task key={i} />;
              })}
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </div>
    </div>
  );
};

export default Event;
