import React, { Component } from "react";
import Content from "../Content";
import PropTypes from "prop-types";
import { Link } from "gatsby";

class Patents extends Component {
  render() {
    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="section">
                    <h1 className="title">Examples of Patents</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <tr>
                    <td>1</td>
                    <td>9,073,024</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Mixing bubble generator and installation configuration{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>8,613,711</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=2&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Stool sample collector{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>8,303,161</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=3&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Water supply thermocline detection and mixing process{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>8,192,069</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=4&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Water supply mixing process{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>8,147,117</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=5&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Water tank deicing mixer{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>8,100,176</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=6&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Device for removing liquids from the well-bore of a gas
                        producing well{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>7,980,720</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=7&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        LED dazzler shield{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>7,794,102</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=8&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        LED dazzler{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>7,775,675</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=9&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Eyeglasses case{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>7,763,173</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=10&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Method for remediating solids in waste lifting stations{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>7,588,478</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=11&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Action figure and accessories{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>7,524,419</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=12&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Mixer for use with media in wastewater treatment{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>7,513,465</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=13&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Attachable baby bottle holder{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>7,374,675</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=14&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Mixer for use in wastewater treatment processes{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>7,349,601</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=15&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        Optical coupler{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>6,840,738</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=16&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Feathering turbine apparatus{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>6,837,651</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=17&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Gravity watercraft lift{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>6,460,072</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=18&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Method and system for tracking the purchase of a product
                        and services over the internet{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>6,295,528</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=19&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Method and apparatus for converting a geographic
                        location to a direct marketing area for a query{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>D443,271</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=20&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Reduced footprint computer keyboard{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>6,237,145</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=21&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        System for accessing promotion information and for
                        generating redeemable coupons therefrom{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>6,230,188</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=22&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        System and method for providing a proxy identifier in an
                        on-line directory{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>6,208,998</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=23&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        On-line directory service through the internet{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>6,138,858</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=24&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Portable tote with assembly surface{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>6,119,127</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=25&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Game software management system, linking game files{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>6,115,177</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=26&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Interactive 3-D viewing glasses{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>6,108,724</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=27&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Fast IDE drive to drive transfers{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>6,104,819</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=28&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Combination speaker and earphone apparatus{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>6,104,606</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=29&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Adjustably mounted infrared device{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>6,104,604</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=30&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Modular keyboard{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>D429,243</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=31&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Personal computer{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>D428,881</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=32&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Integrated desktop personal computer central processing
                        unit and monitor{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>6,098,184</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=33&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Method for improving mouse performance and virtual
                        device driver therefor{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>6,092,659</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=34&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Restricted orientation shipping carton{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>D428,411</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=35&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Integrated desktop personal computer with modular LCD
                        display{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>6,088,021</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=36&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Peripheral input device having a retractable cord{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>D427,387</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=37&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Hand held bird feeder{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>6,081,830</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=38&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Automatic linking to program-specific computer chat
                        rooms{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>6,078,312</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=39&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Pointing device with absolute and relative positioning
                        capability{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>6,075,518</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=40&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Rotational X-axis pointing device{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>6,052,253</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=41&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Dual format tape drive{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>6,046,754</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=42&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Display shutter device for view protection on a portable
                        computer{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>6,040,978</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=43&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Portable computer having folding speakers{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>44</td>
                    <td>6,038,614</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=44&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Active volume control with hot key{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>45</td>
                    <td>6,019,444</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=45&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Stabilizing assembly for I/O panel in computer housings{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>6,018,775</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=46&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        System with a remote wireless mass storage which
                        provides identification of a particular mass storage
                        stored in a cradle to the system{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>6,017,106</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=47&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Removable carry handle and adapter for portable computer{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>6,011,883</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=48&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Switch control combining a light pipe and restore spring{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>6,011,686</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=49&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Audio devices for a portable computer{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>6,003,041</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=50&f=G&l=50&co1=AND&d=PTXT&s1=(claiborne.ATT.)&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Method and managing multiple channel maps from multiple
                        input devices in a multimedia system{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>51</td>
                    <td>6,002,581</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=51&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Lap top computer system with elevating port cover{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>52</td>
                    <td>5,999,405</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=52&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        PCB module support system{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>53</td>
                    <td>5,995,155</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=53&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Database navigation system for a home entertainment
                        system{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>54</td>
                    <td>5,990,872</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=54&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Keyboard control of a pointing device of a computer{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>55</td>
                    <td>D416,243</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=55&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Computer keyboard{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>56</td>
                    <td>5,978,214</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=56&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Electronic device having adjustably mounted infrared
                        device using telescoping arm{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>57</td>
                    <td>5,978,213</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=57&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Electronic device having adjustably mounted infrared
                        device using tension cable{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>58</td>
                    <td>5,966,732</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=58&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Method and apparatus for adding to the reserve area of a
                        disk drive{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>59</td>
                    <td>D414,471</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=59&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Integrated personal computer central processing unit
                        with tiltable monitor{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>5,935,230</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=60&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Multiprocessor arrangement including bus arbitration
                        scheme involving plural CPU clusters that address each
                        other as 'phantom' CPUs{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>61</td>
                    <td>5,933,141</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=61&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Mutatably transparent displays{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>62</td>
                    <td>5,927,094</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=62&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Apparatus for cooling an electronic device{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>63</td>
                    <td>5,914,711</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=63&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Method and apparatus for buffering full-motion video for
                        display on a video monitor{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>64</td>
                    <td>5,910,933</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=64&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Stand alone optical disc player module{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>65</td>
                    <td>5,900,867</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=65&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Self identifying remote control device having a
                        television receiver for use in a computer{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>66</td>
                    <td>5,898,424</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=66&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Pointing device with differing actuation forces for
                        primary and secondary buttons{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>67</td>
                    <td>5,896,269</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=67&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Positive pressure heat sink conduit{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>68</td>
                    <td>D406,579</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=68&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Front bezel for electronic equipment{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>69</td>
                    <td>5,881,318</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=69&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Keyboard audio controls for integrated CD-ROM players{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>5,876,218</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=70&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Piggy back PC card{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>71</td>
                    <td>5,870,080</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=71&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Electro-magnetic transceiver combined with a pointing
                        device{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>72</td>
                    <td>5,860,205</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=72&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Tool for installing and removing computer connectors{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>73</td>
                    <td>5,856,819</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=73&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Bi-directional presentation display{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>74</td>
                    <td>5,850,396</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=74&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Multicast message distribution in a polynomial expansion
                        manner{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>75</td>
                    <td>5,746,154</td>
                    <td>
                      <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=75&f=G&l=50&d=PTXT&s1=(claiborne.ATT.)&p=2&OS=LREP/claiborne&RS=LREP/claiborne">
                        {" "}
                        Hand-held bird feeder{" "}
                      </a>
                    </td>
                  </tr>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Patents;
