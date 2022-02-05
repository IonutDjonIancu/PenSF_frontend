import React from 'react';
import '../styles/ContentChars.css';
import Humans from '../media/humans.png';
import ModifiedHuman from '../media/modifiedHuman.png';
import Azaorn from '../media/azaorn.png';

class ContentChars extends React.Component {

    constructor() {
        super();
  
        this.state = {
            showButtons: true,
            raceSet: '',
            stats: {}
        }
    }

    getImageByRace = (race) => {
        switch (race) {
            case 'humans':
                return Humans;
            case 'modifiedHuman':
                return ModifiedHuman;
            case 'azaorn':
                return Azaorn;
            default:
                break;
        }
    }

    setStats = (race) => {
        switch (race) {
            case 'humans':
                this.setState({
                    showButtons: false,
                    raceSet: 'humans',
                    stats: {
                        raceBonus: {
                            diceRoll: '6d20 for Character points',
                            perks: '2 PERKS without negatives',
                            skillsBonus: 'Melee[+20], Pilot[+20(Vehicles)], Weapons[+20]',
                            statsBonus: '-'
                        },
                        location: 'Most of them are still remaining on Earth, unable to travel to the vast space, but some are more lucky and can be found throughout the stars and planets.',
                        homeworld: '-',
                        equipment: 'You start with the equipment granted by your background.'
                    }
                });    
                break;
            case 'modifiedHuman':
                this.setState({
                    showButtons: false,
                    raceSet: 'modifiedHuman',
                    stats: {
                        raceBonus: {
                            diceRoll: '5d20 for Character points, 1d20 roll for implants (grades on dice = number of implants)',
                            perks: '-',
                            skillsBonus: 'Melee[+10], Pilot[+20(Spaceships)], Cybertech[+20]',
                            statsBonus: '-'
                        },
                        location: 'These are humans that have left Earth into the Known Galaxy discovered by the P.L.U. Vastly found in the universe, they adapt by using Implants in order to keep up with technology.',
                        homeworld: '-',
                        equipment: 'You start with the equipment granted by your background.'
                    }
                });    
                break;
            case 'azaorn':
                this.setState({
                    showButtons: false,
                    raceSet: 'azaorn',
                    stats: {
                        raceBonus: {
                            diceRoll: '5d20 for Character points',
                            perks: '1 perk without negatives (non fighting perk)',
                            skillsBonus: '-',
                            statsBonus: 'Dexterity starts from 9, Willpower starts from 7'
                        },
                        location: 'They are asexual species with no visible genitalia, they reproduce by spawning. They are a peaceful civilization, dedicated to creative and leisure pursuits, such as art, music, dance and topiary. They have advanced scientific knowledge and evolved sense of morality.',
                        homeworld: 'Grenushania',
                        equipment: 'You start with the equipment granted by your background.'
                    }
                });    
                break;     
            default:
                break;
        }
    }

    charsConditionalRendering = () => {

        if(this.state.showButtons === true) {
            return(
                <div>
                    <button 
                        className='f6 br2 link dim ba ph3 pv2 mb2 dib black mr1'
                        onClick={() => this.setStats('humans')}
                    >
                        Humans
                    </button>
                    <button 
                        className='f6 br2 link dim ba ph3 pv2 mb2 dib black mr1'
                        onClick={() => this.setStats('modifiedHuman')}
                    >
                        Modified human
                    </button>
                    <button 
                        className='f6 br2 link dim ba ph3 pv2 mb2 dib black mr1'
                        onClick={() => this.setStats('azaorn')}
                    >
                        Azaorn
                    </button>
                </div>
            );
        } else {
            return(
                <div className='ma2'>
                    <img 
                        alt='img' 
                        src={this.getImageByRace(this.state.raceSet)}
                        className='br3' 
                    />
                    <p className='white b f4 o-70 yellow'>
                        {(this.state.raceSet).toUpperCase()}
                    </p>
                    <ul 
                        style={{ 
                            textAlign: 'left'
                        }}
                    >
                        <li>
                            <span className='o-50'>
                                Race bonus:
                            </span>
                            <ul>
                                <li>
                                    {this.state.stats.raceBonus.diceRoll}
                                </li>
                                <li>
                                    {this.state.stats.raceBonus.perks}
                                </li>
                                <li>
                                    {this.state.stats.raceBonus.skillsBonus}
                                </li>
                                <li>
                                    {this.state.stats.raceBonus.statsBonus}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className='o-50'>
                                Location and homeworld: 
                            </span>
                            <ul>
                                <li>
                                    {this.state.stats.location}
                                </li>
                                <li>
                                    {this.state.stats.homeworld}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className='o-50'>
                                Equipment: 
                            </span>
                            <ul>
                                <li>
                                {this.state.stats.equipment}
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p 
                        className='f3 pointer grow'
                        onClick={() => {
                            this.setState({
                                showButtons: true
                            });
                        }}
                    >
                        {'<<<'}
                    </p>
                </div>
            );
        }

    }

    render() {
        return(
            <div className='white chars-container'>
                {
                    this.charsConditionalRendering()
                }
            </div>
        );
    }
}







export default ContentChars;