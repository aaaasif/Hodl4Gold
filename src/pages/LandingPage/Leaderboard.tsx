import React from "react";
import './Leaderboard.css'

const Leaderboard: React.FC = () => {
  return (
    <div className="leaderboard">
      <div className="pad">
        <div className="leaderboard_header">
          <h2 className="mb-10">Leaderboard</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc sollicitudin at
            ut lobortis in phasellus est. Mollis semper id vitae in eget.{" "}
          </p>
          <div className="winners">
            <p className="leaderboard_title">Today’s winners</p>
          </div>
          <div>
            <table>
                <tr className="table_head">
                  <th>Name</th>
                  <th>Wallet adress</th>
                  <th>Points</th>
                </tr>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo">JM</span> 
                  <div>
                  Josheph McDonald <br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
                <br/>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo fm">FM</span> 
                  <div>
                  Floyd Miles <br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
                <br/>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo bc">BC</span> 
                  <div>
                  Bessie Cooper<br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
                <br/>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo sn">SN</span> 
                  <div>
                  Savannah Nguyen<br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
                <br/>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo rr">RR</span> 
                  <div>
                  Ronald Richards<br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
            </table>
            <button className="table_button">See more <span>⬇</span> </button>
          </div>
          <div>
            <h4 className="leaderboard_title">Winners for the month of January 2022</h4>
            <br/>
            <table>
                <tr className="table_head">
                  <th>Name</th>
                  <th>Wallet adress</th>
                  <th>Points</th>
                </tr>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo dl">DL</span> 
                  <div>
                  Devon Lane <br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
                <br/>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo dr">DR</span> 
                  <div>
                  Dianne Russell <br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
                <br/>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo el">EH</span> 
                  <div>
                  Esther Howard<br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
                <br/>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo la">LA</span> 
                  <div>
                  Leslie Alexander<br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
                <br/>
                <tr className="table_row">
                  <td className="table_Name"> <span className="name_logo jj">JJ</span> 
                  <div>
                  Jacob Jones<br/>
                  josheph_mcdonald1997@gmail.com
                  </div>
                  </td>
                  <td>0x1332046fF3A5960dce88c5171Ed1f376104AA209</td>
                  <td>1500</td>
                </tr>
            </table>
            <button className="table_button">See more <span>⬇</span> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
